"use client";

import InputGroup from "./InputGroup";
import Title from "./Title";
import useContractInfo from "@/hooks/useContractInfo";
import Button from "./Button";
import Check from "./svgs/Check";
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";
import { chains } from "@/constants/chains";

interface PresalePriceProps {
  index: number;
}

const PresalePrice: React.FC<PresalePriceProps> = ({ index }) => {
  const { presalePrice, setPresalePrice, setStep, symbol, step, network } =
    useContractInfo();

  const onPresalePriceConfirm = () => {
    if (!presalePrice.length) {
      toast.error("Input the valid presale token price");
      return;
    }
    setStep(index + 1);
  };

  const native = chains.find((item) => item.id === network)?.nativeCurrency
    .symbol;

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
      <Title index={index}>Enter the presale token price</Title>
      <InputGroup
        placeholder="Type the presale token price..."
        value={presalePrice}
        setValue={setPresalePrice}
        className="mt-10"
      />
      <div className="flex flex-wrap mt-1.5 text-xs md:text-sm">
        <span className="mr-6">
          1 {native} = {presalePrice.length ? presalePrice : 0} {symbol}
        </span>
        <span className="">
          1 {symbol} = {presalePrice.length ? 1 / Number(presalePrice) : 0} {native}
        </span>
      </div>
      <Button className="mt-6" onClick={onPresalePriceConfirm}>
        <span className="mr-2">OK</span> <Check />
      </Button>
    </Transition>
  );
};

export default PresalePrice;
