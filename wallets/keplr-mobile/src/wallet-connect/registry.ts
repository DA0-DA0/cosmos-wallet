import { Wallet } from '@cosmos-kit/core';

export const keplrMobileInfo: Wallet = {
  name: 'keplr-mobile',
  prettyName: 'Keplr Mobile',
  logo:
    'https://user-images.githubusercontent.com/545047/202085372-579be3f3-36e0-4e0b-b02f-48182af6e577.svg',
  mode: 'wallet-connect',
  mobileDisabled: false,
  rejectMessage: 'Request rejected',
  downloads: [
    {
      device: 'mobile',
      os: 'android',
      link:
        'https://play.google.com/store/apps/details?id=com.chainapsis.keplr&hl=en&gl=US&pli=1',
    },
    {
      device: 'mobile',
      os: 'ios',
      link: 'https://apps.apple.com/us/app/keplr-wallet/id1567851089',
    },
    {
      link: 'https://www.keplr.app/download',
    },
  ],
  connectEventNamesOnWindow: ['keplr_keystorechange'],
  walletconnect: {
    name: 'Keplr',
    projectId:
      '6adb6082c909901b9e7189af3a4a0223102cd6f8d5c39e39f3d49acb92b578bb',
    encoding: 'base64',
    // mobile: {
    //   native: 'keplrwallet:',
    // },
    // formatNativeUrl: (appUrl: string, wcUri: string, name: string): string => {
    //   const plainAppUrl = appUrl.replaceAll('/', '').replaceAll(':', '');
    //   // const encodedWcUrl = encodeURIComponent(wcUri);
    //   return `${plainAppUrl}://wcV2?${wcUri}`;
    // },
  },
};
