"use client";

import Title from "../Title";
import NetworkCard from "./NetworkCard";

import Ethereum from "@/assets/networks/Ethereum.png";
import Arbitrum from "@/assets/networks/Arbitrum.png";
import BSC from "@/assets/networks/BSC.png";
import Optimism from "@/assets/networks/Optimism.png";
import Base from "@/assets/networks/Base.png";
import Avalanche from "@/assets/networks/Avalanche.png";
import Fantom from "@/assets/networks/Fantom.png";
import Degen from "@/assets/networks/Degen.png";
import Blast from "@/assets/networks/Blast.png";
import Zksync from "@/assets/networks/Zksync.png";
import Button from "../Button";
import Check from "../svgs/Check";
import useContractInfo from "@/hooks/useContractInfo";
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";
import { useAccount, useChainId, useConnect, useSwitchChain } from "wagmi";

interface NetworkProps {
  index: number;
}

const Network: React.FC<NetworkProps> = ({ index }) => {
  const { network, setStep, step } = useContractInfo();
  const { address } = useAccount();
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
  const { connectAsync, connectors } = useConnect();
  const networks = [
    {
      image: Ethereum,
      name: "Ethereum",
      network: 1,
      status: "on",
    },
    {
      image: Arbitrum,
      name: "Arbitrum",
      network: 42161,
      status: "on",
    },
    {
      image: Avalanche,
      name: "Avalanche",
      network: 43114,
      status: "on",
    },
    {
      image: BSC,
      name: "BSC",
      network: 56,
      status: "on",
    },
    {
      image: Base,
      name: "Base",
      network: 8453,
      status: "on",
    },
    {
      image: Optimism,
      name: "Optimism",
      network: 10,
      status: "on",
    },
    {
      image: Fantom,
      name: "Fantom",
      network: 250,
      status: "on",
    },
    {
      image: Degen,
      name: "Degen",
      network: 666666666,
      status: "on",
    },
    {
      image: Blast,
      name: "Blast",
      network: 81457,
      status: "on",
    },
    {
      image: Zksync,
      name: "zkSync",
      network: 324,
      status: "on",
    },
    {
      image: Ethereum,
      name: "Sepolia",
      network: 11155111,
      status: "on",
    },
  ];

  const onNetworkConfirm = async () => {
    if (!network) {
      toast.error("Select the network to deploy the contract");
      return;
    }
    if (!address) {
      await connectAsync?.({
        chainId: network,
        // @ts-ignore
        connector: connectors.find((item) => item.id === "injected"),
      });
    }
    if (chainId !== network) {
      await switchChainAsync?.({ chainId: network });
    } else {
      setStep(index + 1);
    }
  };

  return (
    <Transition
      show={step === index}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={"my-auto pb-12 w-full"}
    >
      <Title index={index}>Which network do you build on?</Title>
      <div className="flex flex-wrap mt-10 -ml-2">
        {networks.map((item, i) => (
          <NetworkCard
            key={item.name}
            image={item.image}
            name={item.name}
            chain={item.network}
            status={item.status}
            label={String.fromCharCode(65 + i)}
            className="w-full min-[380px]:w-[calc(50%-8px)] sm:w-[calc(33.3333%-8px)] min-w-[120px] md:min-w-[180px] mt-2 ml-2"
          />
        ))}
      </div>
      <Button className="mt-4" onClick={onNetworkConfirm}>
        <span className="mr-2">
          {!address || chainId !== network ? "CONNECT" : "OK"}
        </span>{" "}
        <Check />
      </Button>
    </Transition>
  );
};

export default Network;
