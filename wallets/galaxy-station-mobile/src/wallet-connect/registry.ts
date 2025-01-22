import { OS, Wallet } from '@cosmos-kit/core';

import { ICON } from '../constant';

export const GalaxyStationMobileInfo: Wallet = {
  name: 'galaxy-station-mobile',
  prettyName: 'Galaxy Station Mobile',
  logo: ICON,
  mode: 'wallet-connect',
  mobileDisabled: false,
  rejectMessage: {
    source: 'Request rejected',
  },
  downloads: [
    {
      device: 'mobile',
      os: 'android',
      link:
        'https://play.google.com/store/apps/details?id=io.hexxagon.station',
    },
    {
      device: 'mobile',
      os: 'ios',
      link: 'https://apps.apple.com/us/app/galaxy-station/id6736960450',
    },
    {
      link:
        'https://chromewebstore.google.com/detail/galaxy-station-wallet/akckefnapafjbpphkefbpkpcamkoaoai?pli=1',
    },
  ],
  connectEventNamesOnWindow: ['keplr_keystorechange'],
  walletconnect: {
    name: 'Galaxy Station',
    projectId:
      'f2259af02252a23d5c69867f4ce1656b',
    encoding: 'base64',
    mobile: {
      native: {
        ios: 'galaxystation:',
        android: 'intent:',
      },
    },
    formatNativeUrl: (
      appUrl: string,
      wcUri: string,
      os: OS | undefined,
      _name: string
    ): string => {
      const plainAppUrl = appUrl.split(':')[0];
      const encodedWcUrl = encodeURIComponent(wcUri);
      switch (os) {
        case 'ios':
          return `https://station.hexxagon.io/wcV2?${encodedWcUrl}`;
        case 'android':
          return `https://station.hexxagon.io/wcV2?${encodedWcUrl}`;
        default:
          return `https://station.hexxagon.io/wcV2?${encodedWcUrl}`;
      }
    },
  },
};
