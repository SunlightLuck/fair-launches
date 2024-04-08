import { chains } from "@/constants/chains";
import FairLaunch from "./FairLaunch";
import axios from "axios";

const VERIFICATION_APIS = {
  1: process.env.NEXT_PUBLIC_ETHEREUM_APIKEY,
  56: process.env.NEXT_PUBLIC_BSC_APIKEY,
  42161: process.env.NEXT_PUBLIC_AVALANCHE_APIKEY,
  43114: process.env.NEXT_PUBLIC_ARBITRUM_APIKEY,
  8453: process.env.NEXT_PUBLIC_BASE_APIKEY,
  81457: process.env.NEXT_PUBLIC_BLAST_APIKEY,
  250: process.env.NEXT_PUBLIC_FANTOM_APIKEY,
  10: process.env.NEXT_PUBLIC_OPTIMISM_APIKEY,
  324: process.env.NEXT_PUBLIC_ZKSYNC_APIKEY,
};

export const verify = async (chain: number, address: string, args: string) => {
  const network = chains.find((item) => item.id === chain);
  if (!network) return;
  console.log(args);
  try {
    if (chain !== 666666666) {
      await axios.post(
        network.blockExplorers.default.apiUrl,
        {
          //@ts-ignore
          apikey: VERIFICATION_APIS[chain],
          module: "contract",
          action: "verifysourcecode",
          contractaddress: address,
          codeformat: "solidity-standard-json-input",
          contractname: `contracts/fair-launch.sol:FairLaunchToken`,
          compilerversion: "v0.8.19+commit.7dd6d404",
          sourceCode: JSON.stringify(FairLaunch.input),
          constructorArguements: args.slice(2),
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    } else {
      await axios.post(
        `${
          network.blockExplorers.default.apiUrl
        }/smart-contracts/${address.toLowerCase()}/verification/via/standard-input`,
        {
          compiler_version: "v0.8.19+commit.7dd6d404",
          contract_name: "contracts/fair-launch.sol:FairLaunchToken",
          constructor_args: args,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
};
