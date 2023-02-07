// @ts-nocheck
import React from 'react'
import { Menu as UikitMenu } from '@beef-swap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import useGetPriceData from 'hooks/useGetPriceData'
import { useProfile } from 'state/hooks'
import { Beef } from 'config'
import link from './config'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  // const BeefPriceUsd = usePriceBeefVusdt()
  const priceData = useGetPriceData()
  const BeefPriceUsd = priceData ? Number(priceData.data[Beef.address]?.price || 0) : undefined
  const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      BeefPriceUsd={BeefPriceUsd}
      links={link(t)}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: !profile?.username,
      }}
      {...props}
    />
  )
}

export default Menu
