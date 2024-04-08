"use client";

import InputGroup from "./InputGroup";
import Title from "./Title";
import useContractInfo from "@/hooks/useContractInfo";
import Button from "./Button";
import Check from "./svgs/Check";
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";

interface SymbolProps {
  index: number;
}

const Symbol: React.FC<SymbolProps> = ({ index }) => {
  const { symbol, setSymbol, setStep, step } = useContractInfo();

  const onSymbolConfirm = () => {
    if (symbol.length < 3) {
      toast.error("Symbol should be at least 3 characters");
      return;
    }
    setStep(index + 1);
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
      <Title index={index}>Enter the token symbol</Title>
      <InputGroup
        placeholder="Type the token symbol..."
        value={symbol}
        setValue={setSymbol}
        className="mt-10"
      />
      <div className="text-xs md:text-sm mt-1.5">${symbol}</div>
      <Button className="mt-6" onClick={onSymbolConfirm}>
        <span className="mr-2">OK</span> <Check />
      </Button>
    </Transition>
  );
};

export default Symbol;
