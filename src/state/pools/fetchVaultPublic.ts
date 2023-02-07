// @ts-nocheck
import BigNumber from 'bignumber.js'
import { convertSharesToBeef } from 'views/Pools/helpers'
import { getBeefVaultContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'

const BeefVaultContract = getBeefVaultContract()

export const fetchPublicVaultData = async () => {
  try {
    const [sharePrice, shares, estimatedBeefBountyReward, totalPendingBeefHarvest] = await makeBatchRequest([
      BeefVaultContract.methods.getPricePerFullShare().call,
      BeefVaultContract.methods.totalShares().call,
      BeefVaultContract.methods.calculateHarvestBeefRewards().call,
      BeefVaultContract.methods.calculateTotalPendingBeefRewards().call,
    ])
    const totalSharesAsBigNumber = new BigNumber(shares as string)
    const sharePriceAsBigNumber = new BigNumber(sharePrice as string)
    const totalBeefInVaultEstimate = convertSharesToBeef(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalBeefInVault: totalBeefInVaultEstimate.BeefAsBigNumber.toJSON(),
      estimatedBeefBountyReward: new BigNumber(estimatedBeefBountyReward as string).toJSON(),
      totalPendingBeefHarvest: new BigNumber(totalPendingBeefHarvest as string).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalBeefInVault: null,
      estimatedBeefBountyReward: null,
      totalPendingBeefHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const [performanceFee, callFee, withdrawalFee, withdrawalFeePeriod] = await makeBatchRequest([
      BeefVaultContract.methods.performanceFee().call,
      BeefVaultContract.methods.callFee().call,
      BeefVaultContract.methods.withdrawFee().call,
      BeefVaultContract.methods.withdrawFeePeriod().call,
    ])
    return {
      performanceFee: parseInt(performanceFee as string, 10),
      callFee: parseInt(callFee as string, 10),
      withdrawalFee: parseInt(withdrawalFee as string, 10),
      withdrawalFeePeriod: parseInt(withdrawalFeePeriod as string, 10),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
