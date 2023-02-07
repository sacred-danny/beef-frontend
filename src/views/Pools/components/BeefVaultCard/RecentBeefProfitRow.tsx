// @ts-nocheck
import React from 'react'
import { Flex, Text } from '@beef-swap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { useBeefVault, usePriceBeefVusdt } from 'state/hooks'
import { getBeefVaultEarnings } from 'views/Pools/helpers'
import RecentBeefProfitBalance from './RecentBeefProfitBalance'

const RecentBeefProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { BeefAtLastUserAction, userShares, lastUserActionTime },
  } = useBeefVault()
  const BeefPriceVusdt = usePriceBeefVusdt()
  const { hasAutoEarnings, autoBeefToDisplay, autoUsdToDisplay } = getBeefVaultEarnings(
    account,
    BeefAtLastUserAction,
    userShares,
    pricePerFullShare,
    BeefPriceVusdt.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent Beef profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentBeefProfitBalance
          BeefToDisplay={autoBeefToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentBeefProfitCountdownRow
