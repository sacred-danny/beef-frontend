// @ts-nocheck
import { usePriceBeefVusdt } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalBeef = getBalanceNumber(totalRewards)
  const BeefPriceVusdt = usePriceBeefVusdt()

  return totalBeef * BeefPriceVusdt.toNumber()
}

export default useLotteryTotalPrizesUsd
