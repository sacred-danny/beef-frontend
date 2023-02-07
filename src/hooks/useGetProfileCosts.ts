// @ts-nocheck
import { useEffect, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import { getProfileContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import { BIG_ZERO } from 'utils/bigNumber'
import useToast from './useToast'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const [costs, setCosts] = useState({
    numberBeefToReactivate: BIG_ZERO,
    numberBeefToRegister: BIG_ZERO,
    numberBeefToUpdate: BIG_ZERO,
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const profileContract = getProfileContract()
        const [numberBeefToReactivate, numberBeefToRegister, numberBeefToUpdate] = await makeBatchRequest([
          profileContract.methods.numberBeefToReactivate().call,
          profileContract.methods.numberBeefToRegister().call,
          profileContract.methods.numberBeefToUpdate().call,
        ])

        setCosts({
          numberBeefToReactivate: new BigNumber(numberBeefToReactivate as string),
          numberBeefToRegister: new BigNumber(numberBeefToRegister as string),
          numberBeefToUpdate: new BigNumber(numberBeefToUpdate as string),
        })
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve Beef costs for profile'))
      }
    }

    fetchCosts().then()
  }, [setCosts, toastError, t])

  return costs
}

export default useGetProfileCosts
