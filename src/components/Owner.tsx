"use client";

import InputGroup from "./InputGroup";
import Title from "./Title";
import useContractInfo from "@/hooks/useContractInfo";
import Button from "./Button";
import Check from "./svgs/Check";
import toast from "react-hot-toast";
import { isAddress } from "viem";
import { useAccount } from "wagmi";
import Warning from "./Warning";
import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import Paste from "./svgs/Paste";

interface OwnerProps {
  index: number;
}

const Owner: React.FC<OwnerProps> = ({ index }) => {
  const { owner, setOwner, setStep, step } = useContractInfo();
  const { address } = useAccount();

  const onOwnerConfirm = () => {
    if (!isAddress(owner.toLowerCase())) {
      toast.error("Input the valid owner address");
      return;
    }
    setStep(index + 1);
  };

  const onPaste = async () => {
    const clipboard = await navigator.clipboard.readText();
    setOwner(clipboard);
  };

  const isNotOwner =
    owner &&
    isAddress(owner.toLowerCase()) &&
    address?.toLowerCase() !== owner.toLowerCase();

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
      <Title index={index}>Enter the owner wallet address</Title>
      <InputGroup
        placeholder="Type the owner wallet address"
        value={owner}
        setValue={setOwner}
        right={
          <button
            className="absolute top-1 right-1 text-[#8A8A8A] peer-focus:text-[#3A3A3A]"
            onClick={onPaste}
          >
            <Paste className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        }
        inputClassName="pr-8 peer"
        className="mt-10"
      />
      <div className="text-xs md:text-sm mt-2 text-[#6A6A6A]">
        Use current wallet:{" "}
        <button
          className="underline text-[#333] font-medium"
          onClick={() => setOwner(address)}
        >
          {address?.slice(0, 6)}...{address?.slice(-6)}
        </button>
      </div>
      {isNotOwner && (
        <Warning
          text="Does not match with your connected wallet"
          className="mt-2"
        />
      )}
      <Button className="mt-6" onClick={onOwnerConfirm}>
        <span className="mr-2">OK</span> <Check />
      </Button>
    </Transition>
  );
};

export default Owner;
