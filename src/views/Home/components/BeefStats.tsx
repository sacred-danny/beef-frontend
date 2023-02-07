import React from 'react'
import { Card, CardBody, Heading, Text } from '@beef-swap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance, useBeefPerBlock } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getBeefAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledBeefStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const BeefStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getBeefAddress()))
  const BeefSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const amountPerBlock = useBeefPerBlock()
  const BeefPerBlock = amountPerBlock ? getBalanceNumber(amountPerBlock) : 0;

  return (
    <StyledBeefStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Beef Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total Beef Supply')}</Text>
          {BeefSupply && <CardValue fontSize="14px" value={BeefSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Beef Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New Beef/block')}</Text>
          <CardValue fontSize="14px" decimals={3} value={BeefPerBlock} />
        </Row>
      </CardBody>
    </StyledBeefStats>
  )
}

export default BeefStats
