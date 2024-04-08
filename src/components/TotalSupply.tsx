"use client";

import InputGroup from "./InputGroup";
import Title from "./Title";
import useContractInfo from "@/hooks/useContractInfo";
import Button from "./Button";
import Check from "./svgs/Check";
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";
import { translate } from "@/utils/translate";

interface TotalSupplyProps {
  index: number;
}

const TotalSupply: React.FC<TotalSupplyProps> = ({ index }) => {
  const { totalSupply, setTotalSupply, setStep, step } = useContractInfo();

  const onTotalSupplyConfirm = () => {
    if (Number(totalSupply) <= 0) {
      toast.error("Input the valid total supply");
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
      <Title index={index}>Enter the total token supply</Title>
      <InputGroup
        type="number"
        placeholder="Type the total token supply"
        value={totalSupply}
        setValue={setTotalSupply}
        className="mt-10"
      />
      <div className="text-xs md:text-sm mt-1.5">
        {totalSupply.length ? translate(Number(totalSupply)) : "Zero"}
      </div>
      <div className="flex flex-col w-fit *:text-left *:text-sm space-y-1 mt-4">
        <button
          className="text-[#6A6A6A] hover:text-[#3A3A3A] transition-all"
          onClick={() => setTotalSupply("1000000")}
        >
          1 Million
        </button>
        <button
          className="text-[#6A6A6A] hover:text-[#3A3A3A] transition-all"
          onClick={() => setTotalSupply("1000000000")}
        >
          1 Billion
        </button>
        <button
          className="text-[#6A6A6A] hover:text-[#3A3A3A] transition-all"
          onClick={() => setTotalSupply("1000000000000")}
        >
          1 Trillion
        </button>
      </div>
      <Button className="mt-6" onClick={onTotalSupplyConfirm}>
        <span className="mr-2">OK</span> <Check />
      </Button>
    </Transition>
  );
};

export default TotalSupply;
