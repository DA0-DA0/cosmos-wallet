import { inject } from "vue";
import { ManagerContext } from "@cosmos-kit/core";
import { WalletManagerContext } from "../types";

const walletContextKey = "walletManager";

export const useManager = (): ManagerContext => {
  const context = inject<WalletManagerContext>(walletContextKey);

  if (!context) {
    throw new Error("You have forgotten to use ChainProvider.");
  }

  const { walletManager }: any = context;
  const {
    mainWallets,
    chainRecords,
    walletRepos,
    defaultNameService,
    getChainRecord,
    getWalletRepo,
    addChains,
    addEndpoints,
    getChainLogo,
    getNameService,
    on,
    off,
  } = walletManager;

  return {
    chainRecords,
    walletRepos,
    mainWallets,
    defaultNameService,
    getChainRecord,
    getWalletRepo,
    addChains,
    addEndpoints,
    getChainLogo,
    getNameService,
    on,
    off,
  };
};