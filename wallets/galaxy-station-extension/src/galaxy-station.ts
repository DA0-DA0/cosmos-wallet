import {
  galaxyStationExtensionInfo,
  GalaxyStationExtensionWallet,
} from './extension';

const galaxyStationExtension = new GalaxyStationExtensionWallet(
  galaxyStationExtensionInfo
);

export const wallets = [galaxyStationExtension];
