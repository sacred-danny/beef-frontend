import { ChainId, IS_MAINNET, Token } from '@wagyu-swap-libs/sdk'
import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const Beef = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0x297170abcFC7AceA729ce128E1326bE125a7F982', 18, 'Beef', 'BeefSwap Token')
export const VELAS_BLOCK_TIME = 3

// Beef_PER_BLOCK details
// 40 Beef is minted per block
// 20 Beef per block is sent to Burn pool (A farm just for burning Beef)
// 10 Beef per block goes to Beef sauce pool
// 10 Beef per block goes to Yield farms and lottery
// Beef_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// Beef/Block in src/views/Home/components/BeefStats.tsx = 20 (40 - Amount sent to burn pool)

export const Beef_PER_BLOCK = new BigNumber(0.002)
export const BLOCKS_PER_YEAR = new BigNumber((60 / VELAS_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const Beef_PER_YEAR = Beef_PER_BLOCK.times(BLOCKS_PER_YEAR)
export const BASE_URL = 'https://Beefswap.herokuapp.com'
export const BASE_EXCHANGE_URL = 'https://staging.exchange.Beefswap.app'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const BASE_VELAS_SCAN_URL = 'https://evmexplorer.testnet.velas.com'
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 800000
export const DEFAULT_GAS_PRICE = 5
