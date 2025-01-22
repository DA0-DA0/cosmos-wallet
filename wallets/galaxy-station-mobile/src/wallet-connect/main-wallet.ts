import { EndpointOptions, Wallet } from '@cosmos-kit/core'
import { WCWallet } from '@cosmos-kit/walletconnect'

import { ChainGalaxyStationMobile } from './chain-wallet'
import { GalaxyStationClient } from './client'

export class GalaxyStationMobileWallet extends WCWallet {
  constructor(walletInfo: Wallet, preferredEndpoints?: EndpointOptions['endpoints']) {
    super(walletInfo, ChainGalaxyStationMobile, GalaxyStationClient)
    this.preferredEndpoints = preferredEndpoints
  }
}
