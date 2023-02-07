// @ts-nocheck
import React from 'react'
import { Text, TooltipText, useTooltip } from '@beef-swap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

interface RecentBeefProfitBalanceProps {
  BeefToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentBeefProfitBalance: React.FC<RecentBeefProfitBalanceProps> = ({
  BeefToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={BeefToDisplay} decimals={3} bold unit=" Beef" />
      <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={BeefToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentBeefProfitBalance
