import { BASE_VELAS_SCAN_URL } from 'config'
import {
  getVelasScanAddressUrl,
  getVelasScanTransactionUrl,
  getVelasScanBlockNumberUrl,
  getVelasScanBlockCountdownUrl,
} from 'utils/velasScan'

describe('getBscScanAddressUrl', () => {
  it.each([
    [
      '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
      `${BASE_VELAS_SCAN_URL}/address/0x73feaa1eE314F8c655E354234017bE2193C9E24E`,
    ],
    [
      '0x8a06ff2748edcba3fb4e44a6bfda4e46769e557b',
      `${BASE_VELAS_SCAN_URL}/address/0x8a06ff2748edcba3fb4e44a6bfda4e46769e557b`,
    ],
    [
      '0x3eba95f5493349bbe0cad33eaae05dc6a7e26b90',
      `${BASE_VELAS_SCAN_URL}/address/0x3eba95f5493349bbe0cad33eaae05dc6a7e26b90`,
    ],
  ])('returns correct bscscan url given address %s', (address, expected) => {
    expect(getVelasScanAddressUrl(address)).toEqual(expected)
  })
})

describe('getBscScanTransactionUrl', () => {
  it.each([
    [
      '0x9be463d6cb0fe05a1711e7a142e349d4f3cd8824f5876d55ecb47ba94e88932a',
      `${BASE_VELAS_SCAN_URL}/tx/0x9be463d6cb0fe05a1711e7a142e349d4f3cd8824f5876d55ecb47ba94e88932a`,
    ],
    [
      '0xcf538741397a146a70468cf197eb0bbc743ab6965398c4305335ca16d3a4b9d9',
      `${BASE_VELAS_SCAN_URL}/tx/0xcf538741397a146a70468cf197eb0bbc743ab6965398c4305335ca16d3a4b9d9`,
    ],
    [
      '0x0d2b5d9f267cf2eaf39a6a5f8b31b72cff368e88b6445578ba082f7b2957646e',
      `${BASE_VELAS_SCAN_URL}/tx/0x0d2b5d9f267cf2eaf39a6a5f8b31b72cff368e88b6445578ba082f7b2957646e`,
    ],
  ])('returns correct bscscan url given transaction %s', (tx, expected) => {
    expect(getVelasScanTransactionUrl(tx)).toEqual(expected)
  })
})

describe('getBscScanBlockNumberUrl', () => {
  it.each([
    ['7737334', `${BASE_VELAS_SCAN_URL}/block/7737334`],
    [7737334, `${BASE_VELAS_SCAN_URL}/block/7737334`],
  ])('returns correct bscscan url given block number %s', (block, expected) => {
    expect(getVelasScanBlockNumberUrl(block)).toEqual(expected)
  })
})

describe('getBscScanBlockCountdownUrl', () => {
  it.each([
    ['7737334', `${BASE_VELAS_SCAN_URL}/block/countdown/7737334`],
    [7737334, `${BASE_VELAS_SCAN_URL}/block/countdown/7737334`],
  ])('returns correct bscscan url given block number %s', (block, expected) => {
    expect(getVelasScanBlockCountdownUrl(block)).toEqual(expected)
  })
})
