import NFT from '../abi/NFT.json';

export const DEBUG = true;
export const MAINNET_RPC_URL = "https://mainnet.infura.io/v3/5a99373559f8468eb4d40e15b3dd9812";
export const TESTNET_RPC_URL = "https://rinkeby.infura.io/v3/5a99373559f8468eb4d40e15b3dd9812";
// export const HARDHAT_URL = "http://localhost:8545";

export const contractAddress = NFT.address;

export const NETWORK_ID = DEBUG ? 4 : 1;
export const RPC_URL = NETWORK_ID == 4 ? TESTNET_RPC_URL : MAINNET_RPC_URL;
export const NETWORK_NAME = DEBUG ? 'Hardhat' : 'Mainnet'

export const OPENSEA_LINK = 'https://opensea.io/Aneroverse';
export const WHITELIST_LIMIT = 300;

export const PRESALE_DATE = 'Apr 8, 2022';