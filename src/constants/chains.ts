import {
  arbitrum,
  avalanche,
  base,
  blast,
  bsc,
  degen,
  fantom,
  mainnet,
  optimism,
  sepolia,
  zkSync,
} from "wagmi/chains";

export const chains = [
  mainnet,
  arbitrum,
  avalanche,
  bsc,
  base,
  optimism,
  fantom,
  blast,
  zkSync,
  degen,
  sepolia,
] as const;

export const FEES = {
  1: 0.01,
  42161: 0.01,
  43114: 0.01,
  8453: 0.01,
  81457: 0.01,
  56: 0.1,
  666666666: 1000,
  250: 0.01,
  10: 0.01,
  324: 0.01,
  11155111: 0.01,
};

export const UNISWAPS = {
  1: {
    factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  },
  42161: {
    factory: "0x6EcCab422D763aC031210895C81787E87B43A652",
    router: "0xc873fEcbd354f5A56E00E710B90EF4201db2448d",
  },
  43114: {
    factory: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    router: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  },
  8453: {
    factory: "0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6",
    router: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
  },
  81457: {
    factory: "0xb4A7D971D0ADea1c73198C97d7ab3f9CE4aaFA13",
    router: "0x98994a9a7a2570367554589189dc9772241650f6",
  },
  56: {
    factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    router: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
  },
  666666666: {
    factory: "0xa5e57cab76caa09f66280f9eb1529ed1059e87ba",
    router: "0x5a8e4e0dd630395b5afb8d3ac5b3ef269f0c8356",
  },
  250: {
    factory: "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
    router: "0xf491e7b69e4244ad4002bc14e878a34207e38c29",
  },
  10: {
    factory: "0x0c3c1c532F1e39EdF36BE9Fe0bE1410313E074Bf",
    router: "0x4a7b5da61326a6379179b40d00f57e5bbdc962c2",
  },
  324: {
    factory: "0xd03D8D566183F0086d8D09A84E1e30b58Dd5619d",
    router: "0x5aEaF2883FBf30f3D62471154eDa3C0c1b05942d",
  },
  11155111: {
    factory: "0x7E0987E5b3a30e3f2828572Bb659A548460a3003",
    router: "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008",
  },
};
