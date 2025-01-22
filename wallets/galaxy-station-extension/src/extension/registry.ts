import { Wallet } from '@cosmos-kit/core';

import { ICON } from '../constant';

export const galaxyStationExtensionInfo: Wallet = {
  name: 'galaxy-station-extension',
  prettyName: 'Galaxy Station',
  logo: ICON,
  mode: 'extension',
  mobileDisabled: true,
  connectEventNamesOnWindow: [
    'galaxy_station_wallet_change',
    'galaxy_station_network_change',
  ],
  rejectMessage: {
    source: 'Request rejected',
  },
  downloads: [
    {
      device: 'desktop',
      browser: 'chrome',
      link: 'https://chromewebstore.google.com/detail/galaxy-station-wallet/akckefnapafjbpphkefbpkpcamkoaoai',
    },
  ],
};
