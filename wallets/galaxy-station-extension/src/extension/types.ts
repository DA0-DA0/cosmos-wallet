export type ChainId = string;

export type Addresses = Record<ChainId, string>;

export type CoinType = number;

export type Pubkeys = Record<CoinType, string>;

export interface NetworkInfo {
  baseAsset: string;
  chainID: string;
  coinType: string;
  gasAdjustment: number;
  gasPrices: Record<string, number>;
  icon: string;
  lcd: string;
  name: string;
  prefix: string;
}
