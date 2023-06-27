import { ConnectModalHead, ConnectModalStatus } from '@cosmology-ui/react';
import { WalletViewProps } from '@cosmos-kit/core';
import { FaAndroid } from 'react-icons/fa';
import { GoDesktopDownload } from 'react-icons/go';
import { GrFirefox } from 'react-icons/gr';
import { RiChromeFill } from 'react-icons/ri';
import { RiAppStoreFill } from 'react-icons/ri';

import { ModalViewImpl } from './config';

export function NotExistView({
  onClose,
  onReturn,
  wallet,
}: WalletViewProps): ModalViewImpl {
  const {
    walletInfo: { prettyName },
    downloadInfo,
  } = wallet;

  const onInstall = () => {
    window.open(downloadInfo?.link, '_blank');
  };

  const IconComp = getIcon(downloadInfo);

  const modalHead = (
    <ConnectModalHead
      title={prettyName}
      hasBackButton={true}
      onClose={onClose}
      onBack={onReturn}
    />
  );

  const modalContent = (
    <ConnectModalStatus
      status="NotExist"
      wallet={{
        name: wallet.walletInfo.name,
        prettyName: wallet.walletInfo.prettyName,
        logo: wallet.walletInfo.logo,
        isMobile: wallet.walletInfo.mode === 'wallet-connect',
        mobileDisabled: wallet.walletInfo.mobileDisabled,
      }}
      contentHeader={`${prettyName} Not Installed`}
      contentDesc={
        onInstall
          ? `If ${prettyName.toLowerCase()} is installed on your device, please refresh this page or follow the browser instruction.`
          : `Download link not provided. Try searching it or consulting the developer team.`
      }
      onInstall={onInstall}
      installIcon={<IconComp />}
      disableInstall={!downloadInfo?.link}
    />
  );

  return { head: modalHead, content: modalContent };
}

function getIcon(downloadInfo: WalletViewProps['wallet']['downloadInfo']) {
  if (downloadInfo?.browser === 'chrome') return RiChromeFill;
  if (downloadInfo?.browser === 'firefox') return GrFirefox;
  if (downloadInfo?.os === 'android') return FaAndroid;
  if (downloadInfo?.os === 'ios') return RiAppStoreFill;
  return GoDesktopDownload;
}
