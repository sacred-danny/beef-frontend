// @ts-nocheck
import BigNumber from 'bignumber.js'
import { getBeefVaultContract } from 'utils/contractHelpers'

const BeefVaultContract = getBeefVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await BeefVaultContract.methods.userInfo(account).call()
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime as string,
      lastUserActionTime: userContractResponse.lastUserActionTime as string,
      BeefAtLastUserAction: new BigNumber(userContractResponse.BeefAtLastUserAction).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      BeefAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
