import { ChainRecord, Wallet } from '@cosmos-kit/core'
import { ChainWC } from '@cosmos-kit/walletconnect'
import { GalaxyStationClient } from './client'

export class ChainGalaxyStationMobile extends ChainWC {
  constructor(walletInfo: Wallet, chainInfo: ChainRecord) {
    super(walletInfo, chainInfo, GalaxyStationClient)
  }
}
