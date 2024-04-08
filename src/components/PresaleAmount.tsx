"use client";

import InputGroup from "./InputGroup";
import Title from "./Title";
import useContractInfo from "@/hooks/useContractInfo";
import Button from "./Button";
import Check from "./svgs/Check";
import toast from "react-hot-toast";
import { useState } from "react";
import PercentModeSwitch from "./PercentModeSwitch";
import { Transition } from "@headlessui/react";
import { translate } from "@/utils/translate";

interface PresaleAmountProps {
  index: number;
}

const PresaleAmount: React.FC<PresaleAmountProps> = ({ index }) => {
  const { presalePercent, setPresalePercent, setStep, symbol, step } =
    useContractInfo();
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState(false);

  let totalSupply = 10000000;
  const onPresaleAmountConfirm = () => {
    if (
      !amount.length ||
      (!mode && (Number(amount) < 0 || Number(amount) > 100)) ||
      (mode && (Number(amount) < 0 || Number(amount) > totalSupply))
    ) {
      toast.error("Input the valid presale amount");
      return;
    }
    setPresalePercent(
      (!mode
        ? Number(amount) * 100
        : (Number(amount) / totalSupply) * 10000
      ).toFixed(0)
    );
    setStep(index + 1);
  };
  const parsedAmount = mode
    ? Math.max(Math.min(Number(amount.length ? amount : 0), totalSupply), 0)
    : Math.max(Math.min(100, Number(amount.length ? amount : 0)), 0);

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
      <Title index={index}>Enter the presale token amount</Title>
      <div className="flex items-end mt-10">
        <InputGroup
          type="number"
          placeholder="Type the presale token amount"
          value={amount}
          setValue={setAmount}
        />
        <PercentModeSwitch value={mode} setValue={setMode} />
      </div>
      <div className="mt-1.5 text-xs md:text-sm">
        {mode
          ? `${parsedAmount} (${translate(parsedAmount)} ${symbol}) = ${(
              (parsedAmount / Number(totalSupply)) *
              100
            ).toFixed(2)}%`
          : `${parsedAmount}% = ${
              (Number(totalSupply) * parsedAmount) / 100
            } (${translate(
              (Number(totalSupply) * parsedAmount) / 100
            )} ${symbol})`}
      </div>
      <Button className="mt-6" onClick={onPresaleAmountConfirm}>
        <span className="mr-2">OK</span> <Check />
      </Button>
    </Transition>
  );
};

export default PresaleAmount;
