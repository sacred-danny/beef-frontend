import React from 'react'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceBeefVusdt } from 'state/hooks'
import { Text } from '@beef-swap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'
import CardVusdtValue from './CardVusdtValue'

const Block = styled.div`
  margin-bottom: 24px;
`

interface BeefWinningsProps {
  claimAmount: BigNumber
}

const BeefWinnings: React.FC<BeefWinningsProps> = ({ claimAmount }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const BeefAmount = getBalanceNumber(claimAmount)
  const BeefPriceVusdt = usePriceBeefVusdt()
  const claimAmountVusdt = new BigNumber(BeefAmount).multipliedBy(BeefPriceVusdt).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={BeefAmount} lineHeight="1.5" />
      {BeefPriceVusdt.gt(0) && <CardVusdtValue value={claimAmountVusdt} decimals={2} />}
    </Block>
  )
}

export default BeefWinnings
