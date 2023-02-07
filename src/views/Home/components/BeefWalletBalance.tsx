import React from 'react'
import { Text } from '@beef-swap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getBeefAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceBeefVusdt } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardVusdtValue from './CardVusdtValue'

const BeefWalletBalance = () => {
  const { t } = useTranslation()
  const { balance: BeefBalance } = useTokenBalance(getBeefAddress())
  const BeefPriceVusdt = usePriceBeefVusdt()
  const vusdtBalance = new BigNumber(getBalanceNumber(BeefBalance)).multipliedBy(BeefPriceVusdt).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(BeefBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      {BeefPriceVusdt.gt(0) ? <CardVusdtValue value={vusdtBalance} /> : <br />}
    </>
  )
}

export default BeefWalletBalance
