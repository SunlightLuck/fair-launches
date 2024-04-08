"use client";

import useContractInfo from "@/hooks/useContractInfo";
import { Transition } from "@headlessui/react";
import Title from "./Title";
import Button from "./Button";
import RadioGroup from "./RadioGroup";
import { useEffect, useState } from "react";
import { FEES, UNISWAPS, chains } from "@/constants/chains";
import {
  useAccount,
  useGasPrice,
  usePublicClient,
  useWalletClient,
} from "wagmi";
import toast from "react-hot-toast";
import FairLaunch from "@/contracts/FairLaunch";
import {
  Address,
  BaseError,
  encodeAbiParameters,
  encodeDeployData,
  formatEther,
  getAddress,
  parseEther,
  parseUnits,
} from "viem";
import { verify } from "@/contracts/verify";
import usePrice from "@/hooks/usePrice";
import Check from "./svgs/Check";

interface SummaryProps {
  index: number;
}

const Summary: React.FC<SummaryProps> = ({ index }) => {
  const [confirmed, setConfirmed] = useState(false);
  const {
    step,
    name,
    symbol,
    network,
    owner,
    totalSupply,
    presalePercent,
    presalePrice,
    paid,
    setPaid,
    setStep,
    setContract,
  } = useContractInfo();
  const { data: walletClient } = useWalletClient();
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [gas, setGas] = useState(BigInt(0));
  const publicClient = usePublicClient();
  const { data: gasPrice } = useGasPrice();
  const { data: price } = usePrice(network);

  const native = chains.find((item) => item.id === network)?.nativeCurrency
    .symbol;

  // @ts-ignore
  const fee = FEES?.[network];

  useEffect(() => {
    setConfirmed(false);
    if (step === index) {
      const deployData = encodeDeployData({
        abi: FairLaunch.abi,
        bytecode: FairLaunch.bytecode as `0x${string}`,
        args: [
          BigInt(1000000),
          BigInt(1000000 * Number(presalePrice)),
          parseUnits(totalSupply, 18),
          BigInt(presalePercent),
          owner as Address,
          //@ts-ignore
          UNISWAPS[network].router,
          //@ts-ignore
          UNISWAPS[network].factory,
          name,
          symbol,
        ],
      });
      publicClient
        ?.estimateGas({
          data: deployData,
        })
        .then((res) => setGas(() => res));
    }
  }, [step]);

  const onDeploy = async () => {
    try {
      if (!walletClient) {
        toast.error("Connect your wallet first");
        return;
      }
      setLoading(true);
      if (paid) {
        const hash = await walletClient.deployContract({
          abi: FairLaunch.abi,
          account: address,
          bytecode: FairLaunch.bytecode as `0x${string}`,
          args: [
            BigInt(1000000),
            BigInt(1000000 * Number(presalePrice)),
            parseUnits(totalSupply, 18),
            BigInt(presalePercent),
            owner as Address,
            //@ts-ignore
            UNISWAPS[network].router,
            //@ts-ignore
            UNISWAPS[network].factory,
            name,
            symbol,
          ],
        });

        const res = await publicClient?.waitForTransactionReceipt({ hash });
        console.log(res);
        setContract(getAddress(`0x${res?.logs?.[0]?.topics?.[2]?.slice(-40)}`));
        setStep(index + 1);
      } else {
        const hash = await walletClient.sendTransaction({
          to: "0x177af6b4b550406d036932A503292106AB4b380f",
          value: parseUnits(fee?.toString(), 18),
        });
        const res = await publicClient?.waitForTransactionReceipt({ hash });
        console.log(res);
        setPaid(true);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(
        err instanceof BaseError
          ? err.shortMessage
          : err?.message ?? JSON.stringify(err)
      );
    }
    setLoading(false);
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
      className={"my-auto pb-12 w-full max-md:text-sm"}
    >
      <Title index={index}>Summary</Title>
      <div className="flex flex-col space-y-3 mt-10">
        <div className="flex justify-between max-sm:flex-col">
          <span>Network: </span>
          <span className="font-medium">
            {chains.find((item) => item.id === network)?.name}
          </span>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <span>Name: </span>
          <span className="font-medium">{name}</span>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <span>Symbol: </span>
          <span className="font-medium">{symbol}</span>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <span>Owner: </span>
          <span className="font-medium">{owner}</span>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <span>Total Supply: </span>
          <span className="font-medium">
            {Number(totalSupply).toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <span>Presale Percent: </span>
          <span className="font-medium">{Number(presalePercent) / 100}%</span>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <span>Presale Price: </span>
          <span className="font-medium">
            {presalePrice} {symbol}/{native}
          </span>
        </div>
      </div>
      <div className="border-t border-[#AAA] -ml-5 -mr-5 my-3" />
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between max-sm:flex-col">
          <span>Presale: </span>
          <span className="font-medium">
            {(
              (Number(totalSupply) * Number(presalePercent)) /
              10000 /
              Number(presalePrice)
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}{" "}
            {native} (
            {(
              (price ?? 0) *
              ((Number(totalSupply) * Number(presalePercent)) /
                10000 /
                Number(presalePrice))
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}
            $)
          </span>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <span>Gas Price: </span>
          <span className="font-medium">
            {Number(formatEther((gasPrice ?? BigInt(1)) * gas)).toFixed(4)}{" "}
            {native}
          </span>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <span>Fee: </span>
          <span className="flex items-center font-medium">
            {paid && <Check className="text-green-600 mr-1" />}
            {fee} {native}
          </span>
        </div>
      </div>
      <RadioGroup
        text="Please confirm the information you have entered"
        checked={confirmed}
        onChange={() => setConfirmed(!confirmed)}
        className="mt-4"
      ></RadioGroup>
      <Button
        onClick={onDeploy}
        loading={loading}
        disabled={!confirmed}
        className="mt-4 min-w-24"
      >
        {paid ? "DEPLOY" : "CHECK OUT"}
      </Button>
    </Transition>
  );
};

export default Summary;
