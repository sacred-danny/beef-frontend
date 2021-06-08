import React from 'react'
import styled from 'styled-components'
import { BaseLayout, Heading, Text } from '@wagyu-swap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/WagyuStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import Container from 'components/layout/Container'

const Background = styled.div`
  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/background.svg');
    background-width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 165px;
    padding-top: 0;
    margin-bottom: 32px; 
    box-shadow: rgb(31 43 70 / 10%) 0px 0px 0px 3000px inset;
  }
`

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-wagyu-bg2.svg'), url('/images/pan-wagyu-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
    padding-left: 24px;
    padding-right: 24px;
    text-shadow: 0px 7px 5px black;
  }
`
const HeaderContainer = styled(Container)`
  padding-left: 50px;
  padding-right: 50px;
`

const MainContainer = styled(Container)`
  padding-left: 24px;
  padding-right: 24px;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
      <Page>
        <Background>
          <HeaderContainer>
            <Hero>
              <Heading as="h1" scale="xl" mb="24px" color="secondary">
                {t('WagyuSwap')}
              </Heading>
              <Text>{t('The #1 AMM and yield farm on Velas Chain.')}</Text>
            </Hero>
          </HeaderContainer>
        </Background>
        <MainContainer>
          <Cards>
            <FarmStakingCard />
            <LotteryCard />
          </Cards>
          <CTACards>
            <EarnAPRCard />
            <EarnAssetCard />
            <WinCard />
          </CTACards>
          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        </MainContainer>
      </Page>
  )
}

export default Home