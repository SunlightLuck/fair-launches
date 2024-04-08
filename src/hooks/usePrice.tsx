import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const NATIVE_TOKEN = {
  1: {
    id: "eth",
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  },
  42161: {
    id: "arbitrum",
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  },
  43114: {
    id: "avax",
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  },
  8453: {
    id: "base",
    address: "0x4200000000000000000000000000000000000006",
  },
  81457: {
    id: "blast",
    address: "0x4300000000000000000000000000000000000004",
  },
  56: {
    id: "bsc",
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  },
  666666666: {
    id: "degenchain",
    address: "0xeb54dacb4c2ccb64f8074eceea33b5ebb38e5387",
  },
  250: {
    id: "ftm",
    address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
  },
  10: {
    id: "optimism",
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  },
  324: {
    id: "zksync",
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  },
};

const usePrice = (chain: number) => {
  return useQuery({
    queryKey: ["price", chain],
    queryFn: async () => {
      // @ts-ignore
      const network = NATIVE_TOKEN[chain];
      const res = await axios.get(
        `https://api.geckoterminal.com/api/v2/simple/networks/${network.id}/token_price/${network.address}`
      );

      return Number(
        res?.data?.data?.attributes?.token_prices?.[network.address] ?? "0"
      );
    },
  });
};

export default usePrice;
