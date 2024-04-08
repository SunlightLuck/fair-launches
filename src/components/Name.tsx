"use client";

import InputGroup from "./InputGroup";
import Title from "./Title";
import useContractInfo from "@/hooks/useContractInfo";
import Button from "./Button";
import Check from "./svgs/Check";
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";

interface NameProps {
  index: number;
}

const Name: React.FC<NameProps> = ({ index }) => {
  const { name, setName, setStep, step } = useContractInfo();

  const onNameConfirm = () => {
    if (name.length < 3) {
      toast.error("Name should be at least 3 characters");
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
      <Title index={index}>Enter the token name</Title>
      <InputGroup
        placeholder="Type the token name..."
        value={name}
        setValue={setName}
        className="mt-10"
      />
      <Button className="mt-6" onClick={onNameConfirm}>
        <span className="mr-2">OK</span> <Check />
      </Button>
    </Transition>
  );
};

export default Name;
