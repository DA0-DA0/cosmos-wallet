import { Wallet } from '@cosmos-kit/core';
import { MainWalletBase } from '@cosmos-kit/core';

import { ChainStationExtension } from './chain-wallet';
import { GalaxyStationClient } from './client';
import { getGalaxyStationFromExtension } from './utils';

export class GalaxyStationExtensionWallet extends MainWalletBase {
  constructor(walletInfo: Wallet) {
    super(walletInfo, ChainStationExtension);
  }

  async initClient() {
    this.initingClient();
    try {
      const galaxystation = await getGalaxyStationFromExtension();
      this.initClientDone(
        galaxystation ? new GalaxyStationClient(galaxystation) : undefined
      );
    } catch (error) {
      this.initClientError(error);
    }
  }
}
