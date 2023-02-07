// @ts-nocheck
import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
import { useAppDispatch } from 'state'
import { updateUserAllowance } from 'state/actions'
import { approve } from 'utils/callHelpers'
import { useTranslation } from 'contexts/Localization'
import { useMasterchef, useBeef, useSousChef, useLottery, useBeefVaultContract } from './useContract'
import useToast from './useToast'
import useLastUpdated from './useLastUpdated'

// Approve a Farm
export const useApprove = (lpContract: Contract) => {
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, masterChefContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

// Approve a Pool
export const useSousApprove = (lpContract: Contract, sousId, earningTokenSymbol) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { toastSuccess, toastError } = useToast()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)

  const handleApprove = useCallback(async () => {
    let isSubscribed = true
    try {
      if (isSubscribed) {
        setRequestedApproval(true)
      }
      const tx = await approve(lpContract, sousChefContract, account)
      dispatch(updateUserAllowance(sousId, account))
      if (tx) {
        toastSuccess(
          t('Contract Enabled'),
          t('You can now stake in the %symbol% pool!', { symbol: earningTokenSymbol }),
        )
        if (isSubscribed) {
            setRequestedApproval(false)
        }
      } else {
        // user rejected tx or didn't go thru
        toastError(
          `${t('Error')}`,
          `${t(`Please try again. Confirm the transaction and make sure you are paying enough gas!`)}`,
        )
        if (isSubscribed) {
          if (isSubscribed) {
            setRequestedApproval(false)
          }
        }
      }
    } catch (e) {
      console.error(e)
      toastError('Error', e?.message)
    }
    return() => {
      isSubscribed = false
    }
  }, [account, dispatch, lpContract, sousChefContract, sousId, earningTokenSymbol, t, toastError, toastSuccess])

  return { handleApprove, requestedApproval }
}

// Approve Beef auto pool
export const useVaultApprove = (setLastUpdated: () => void) => {
  const { account } = useWeb3React()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  const BeefVaultContract = useBeefVaultContract()
  const BeefContract = useBeef()

  const handleApprove = () => {
    BeefContract.methods
      .approve(BeefVaultContract.options.address, ethers.constants.MaxUint256)
      .send({ from: account })
      .on('sending', () => {
        setRequestedApproval(true)
      })
      .on('receipt', () => {
        toastSuccess(t('Contract Enabled'), t('You can now stake in the %symbol% vault!', { symbol: 'Beef' }))
        setLastUpdated()
        setRequestedApproval(false)
      })
      .on('error', (error) => {
        console.error(error)
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
        setRequestedApproval(false)
      })
  }

  return { handleApprove, requestedApproval }
}

export const useCheckVaultApprovalStatus = () => {
  const [isVaultApproved, setIsVaultApproved] = useState(false)
  const { account } = useWeb3React()
  const BeefContract = useBeef()
  const BeefVaultContract = useBeefVaultContract()
  const { lastUpdated, setLastUpdated } = useLastUpdated()
  useEffect(() => {
    let isSubscribed = true
    const checkApprovalStatus = async () => {
      try {
        const response = await BeefContract.methods.allowance(account, BeefVaultContract.options.address).call()
        const currentAllowance = new BigNumber(response)
        if (isSubscribed) {
          setIsVaultApproved(currentAllowance.gt(0))
        }
      } catch (error) {
        if (isSubscribed) {
          setIsVaultApproved(false)
        }
      }
    }

    checkApprovalStatus().then()
    return() => {
      isSubscribed = false
    }
  }, [account, BeefContract, BeefVaultContract, lastUpdated])

  return { isVaultApproved, setLastUpdated }
}

// Approve the lottery
export const useLotteryApprove = () => {
  const { account } = useWeb3React()
  const BeefContract = useBeef()
  const lotteryContract = useLottery()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(BeefContract, lotteryContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, BeefContract, lotteryContract])

  return { onApprove: handleApprove }
}

// Approve an IFO
export const useIfoApprove = (tokenContract: Contract, spenderAddress: string) => {
  const { account } = useWeb3React()
  const onApprove = useCallback(async () => {
    const tx = await tokenContract.methods.approve(spenderAddress, ethers.constants.MaxUint256).send({ from: account })
    return tx
  }, [account, spenderAddress, tokenContract])

  return onApprove
}
