import { wallets as ext } from '@cosmos-kit/galaxy-station-extension';
import { wallets as mobile } from '@cosmos-kit/galaxy-station-mobile';

export const wallets = [...ext, ...mobile];
