// @ts-nocheck
import BigNumber from 'bignumber.js'
import { getBeefAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's Beef balance is at least the amount passed in
 */
const useHasBeefBalance = (minimumBalance: BigNumber) => {
  const { balance: BeefBalance } = useTokenBalance(getBeefAddress())
  return BeefBalance.gte(minimumBalance)
}

export default useHasBeefBalance
