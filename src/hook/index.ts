import { Contract, BigNumber } from "ethers"
import { useContractFunction, useCall } from "@usedapp/core"
import { contractAddress } from "../config/config"
import contractAbi from "../abi/NFT.json";

export enum SalePhase {
    None,
    AuctionSale,
    PreSale,
    PublicSale
}

export const useContract = (address: string, abi: any, signer?: any) => {
    const contract = new Contract(address, abi, signer);
    return contract;
}

export const useMintPublic = () => {
    const contract = useContract(contractAddress, contractAbi.abi);
    const { state, send } = useContractFunction(contract, 'publicSaleMint');
    return {state, send};
}

export const useMintWhitelist = () => {
    const contract = useContract(contractAddress, contractAbi.abi);
    const { state, send } = useContractFunction(contract, 'preSaleMint');
    return {state, send};
}

export const useMintDutchAuction = () => {
    const contract = useContract(contractAddress, contractAbi.abi);
    const { state, send } = useContractFunction(contract, 'auctionSaleMint');
    return {state, send};
}

export const useSalePhase = (): SalePhase => {
    const contract = useContract(contractAddress, contractAbi.abi);
    const {value, error} = useCall({
        contract: contract,
        method: "currentSalePhase",
        args: []
    }) || {value: [BigNumber.from(0)]};

    return value ? value[0] : SalePhase.None;
}

export const useTotalSupply = () => {
    const {value, error} = useCall({
        contract: new Contract(contractAddress, contractAbi.abi),
        method: "totalSupply",
        args: []
    }) || {value: [BigNumber.from(0)]};
    return value ? value[0] : BigNumber.from(0);
}

export const useNFTPrice = (): BigNumber => {
    const contract = useContract(contractAddress, contractAbi.abi);
    const currentSalePhase = useSalePhase();

    const getPriceMethod = (): string => {
        switch(currentSalePhase) {
            case SalePhase.AuctionSale:
                return 'getAuctionPrice';
            case SalePhase.PreSale:
                return 'PRE_SALE_PRICE';
            case SalePhase.PublicSale:
                return 'PUBLIC_SALE_PRICE';
            default:
                return 'getAuctionPrice';
        }
    }

    const {value, error} = useCall({
        contract: contract,
        method: getPriceMethod(),
        args: []
    }) || {value: [BigNumber.from(0)]};

    return value ? value[0] : BigNumber.from(0);
}

export const useMaxSupply = () => {
    return BigNumber.from(7777);
}