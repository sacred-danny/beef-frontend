import React, { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import {
  Card,
  CardBody,
  Text,
  Flex,
  HelpIcon,
  Button,
  Heading,
  Skeleton,
  useModal,
  Box,
  useTooltip,
} from '@beef-swap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { useBeefVault, usePriceBeefVusdt } from 'state/hooks'
import Balance from 'components/Balance'
import BountyModal from './BountyModal'

const StyledCard = styled(Card)`
  width: 100%;
  flex: 1;
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 240px;
  }
`

const BountyCard = () => {
  const { t } = useTranslation()
  const {
    estimatedBeefBountyReward,
    totalPendingBeefHarvest,
    fees: { callFee },
  } = useBeefVault()
  const BeefPriceVusdt = usePriceBeefVusdt()

  const estimatedDollarBountyReward = useMemo(() => {
    return new BigNumber(estimatedBeefBountyReward).multipliedBy(BeefPriceVusdt)
  }, [BeefPriceVusdt, estimatedBeefBountyReward])

  const hasFetchedDollarBounty = estimatedDollarBountyReward.gte(0)
  const hasFetchedBeefBounty = estimatedBeefBountyReward ? estimatedBeefBountyReward.gte(0) : false
  const dollarBountyToDisplay = hasFetchedDollarBounty ? getBalanceNumber(estimatedDollarBountyReward, 18) : 0
  const BeefBountyToDisplay = hasFetchedBeefBounty ? getBalanceNumber(estimatedBeefBountyReward, 18) : 0

  const TooltipComponent = () => (
    <>
      <Text mb="16px">{t('This bounty is given as a reward for providing a service to other users.')}</Text>
      <Text mb="16px">
        {t(
          'Whenever you successfully claim the bounty, you’re also helping out by activating the Auto Beef Pool’s compounding function for everyone.',
        )}
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
        {t('Auto-Compound Bounty: %fee%% of all Auto Beef pool users pending yield', { fee: callFee / 100 })}
      </Text>
    </>
  )

  const [onPresentBountyModal] = useModal(
    <BountyModal
      BeefBountyToDisplay={BeefBountyToDisplay}
      dollarBountyToDisplay={dollarBountyToDisplay}
      totalPendingBeefHarvest={totalPendingBeefHarvest}
      callFee={callFee}
      TooltipComponent={TooltipComponent}
    />,
  )

  const { targetRef, tooltip, tooltipVisible } = useTooltip(<TooltipComponent />, {
    placement: 'bottom-end',
    tooltipOffset: [20, 10],
  })

  return (
    <>
      {tooltipVisible && tooltip}
      <StyledCard>
        <CardBody>
          <Flex flexDirection="column">
            <Flex alignItems="center" mb="12px">
              <Text fontSize="16px" bold color="textSubtle" mr="4px">
                {t('Auto Beef Bounty')}
              </Text>
              <Box ref={targetRef}>
                <HelpIcon color="textSubtle" />
              </Box>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex flexDirection="column" mr="12px">
              <Heading>
                {hasFetchedBeefBounty ? (
                  <Balance fontSize="20px" bold value={BeefBountyToDisplay} decimals={5} />
                ) : (
                  <Skeleton height={20} width={96} mb="2px" />
                )}
              </Heading>
              {hasFetchedDollarBounty ? (
                <Balance
                  fontSize="12px"
                  color="textSubtle"
                  value={dollarBountyToDisplay}
                  decimals={5}
                  unit=" USD"
                  prefix="~"
                />
              ) : (
                <Skeleton height={16} width={62} />
              )}
            </Flex>
            <Button
              disabled={!dollarBountyToDisplay || !BeefBountyToDisplay || !callFee}
              onClick={onPresentBountyModal}
              scale="sm"
            >
              {t('Claim')}
            </Button>
          </Flex>
        </CardBody>
      </StyledCard>
    </>
  )
}

export default BountyCard
