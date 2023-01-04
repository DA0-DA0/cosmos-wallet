import { ChainRecord, Wallet } from '@cosmos-kit/core';
import { ChainWCV1 } from '@cosmos-kit/wcv1';

export class ChainKeplrMobile extends ChainWCV1 {
  constructor(walletInfo: Wallet, chainInfo: ChainRecord) {
    super(walletInfo, chainInfo);
  }
}
