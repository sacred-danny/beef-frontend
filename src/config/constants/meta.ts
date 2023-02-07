import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BeefSwap',
  description:
    'The most popular AMM on BSC by user count! Earn Beef through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BeefSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://Beefswap.herokuapp.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BeefSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BeefSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BeefSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BeefSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BeefSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BeefSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('BeefSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BeefSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BeefSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('BeefSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('BeefSwap')}`,
      }
    default:
      return null
  }
}
