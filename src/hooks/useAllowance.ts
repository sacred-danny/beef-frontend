// @ts-nocheck
import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { getLotteryAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { useBeef } from './useContract'
import useRefresh from './useRefresh'

// Retrieve lottery allowance
export const useLotteryAllowance = () => {
  const [allowance, setAllowance] = useState(BIG_ZERO)
  const { account } = useWeb3React()
  const BeefContract = useBeef()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    let isSubscribed = true
    const fetchAllowance = async () => {
      const res = await BeefContract.methods.allowance(account, getLotteryAddress()).call()
      if (isSubscribed) {
        setAllowance(new BigNumber(res))
      }
    }

    if (account) {
      fetchAllowance().then()
    }
    return() => {
      isSubscribed = false
    }
  }, [account, BeefContract, fastRefresh])

  return allowance
}

// Retrieve IFO allowance
export const useIfoAllowance = (tokenContract: Contract, spenderAddress: string, dependency?: any): BigNumber => {
  const { account } = useWeb3React()
  const [allowance, setAllowance] = useState(BIG_ZERO)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await tokenContract.methods.allowance(account, spenderAddress).call()
        setAllowance(new BigNumber(res))
      } catch (e) {
        console.error(e)
      }
    }

    if (account) {
      fetch().then()
    }
  }, [account, spenderAddress, tokenContract, dependency])

  return allowance
}
