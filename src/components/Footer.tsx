"use client";

import Image from "next/image";

import ChevronDown from "./svgs/ChevronDown";
import Logo from "@/assets/logo.png";
import useContractInfo from "@/hooks/useContractInfo";

const Footer = () => {
  const { step, setStep, maxStep } = useContractInfo();
  return (
    <footer className="fixed bottom-0 left-0 w-full flex justify-end p-4">
      <button
        className="flex items-center justify-center w-9 h-8 bg-[#E8E8E8] hover:bg-[#F1F1F1] transition-all text-[#696969] disabled:bg-[#EDEDED]"
        disabled={step <= 1 || step === 9}
        onClick={() => setStep(step - 1)}
      >
        <ChevronDown className="rotate-180" />
      </button>
      <button
        className="flex items-center justify-center w-9 h-8 bg-[#E8E8E8] hover:bg-[#F1F1F1] transition-all text-[#696969] disabled:bg-[#EDEDED]"
        disabled={step === maxStep || step === 9}
        onClick={() => setStep(step + 1)}
      >
        <ChevronDown />
      </button>
      <div className="flex py-1.5 px-2 bg-[#E8E8E8] ml-2 cursor-pointer">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="Logo"
          className="h-5 w-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
