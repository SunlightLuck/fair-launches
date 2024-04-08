import useContractInfo from "@/hooks/useContractInfo";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { chains } from "@/constants/chains";
import Button from "./Button";

interface WelcomeProps {
  index: number;
}

const Welcome: React.FC<WelcomeProps> = ({ index }) => {
  const { step, setStep } = useContractInfo();

  return (
    <Transition
      show={step === index}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={"my-auto pb-12 w-full flex flex-col items-center"}
    >
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
      />
      <div className="text-center sm:text-lg md:text-2xl mt-10 font-medium text-[#969696] max-w-[560px]">
        Welcome to Fair Launches! Here, you have the opportunity to create your
        very own incredible token using Fair.
      </div>
      <div className="flex justify-center mt-10">
        <Button onClick={() => setStep(index + 1)}>GET STARTED!</Button>
      </div>
    </Transition>
  );
};

export default Welcome;
