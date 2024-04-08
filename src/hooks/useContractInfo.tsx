"use client";

import React, { useEffect, useState } from "react";

interface CnotractInfoType {
  step: number;
  network: number;
  name: string;
  symbol: string;
  owner: string;
  totalSupply: string;
  presalePercent: string;
  presalePrice: string;
  maxStep: number;
  contract: string;
  paid: boolean;
  setStep: any;
  setNetwork: any;
  setName: any;
  setSymbol: any;
  setOwner: any;
  setTotalSupply: any;
  setPresalePercent: any;
  setPresalePrice: any;
  setContract: any;
  setPaid: any;
  clear: any;
}

const defaultVal = {
  network: 0,
  step: 1,
  name: "",
  symbol: "",
  owner: "",
  totalSupply: "",
  presalePercent: "",
  presalePrice: "",
  maxStep: 1,
  contract: "",
  paid: false,
  setNetwork: () => {},
  setStep: () => {},
  setName: () => {},
  setSymbol: () => {},
  setOwner: () => {},
  setTotalSupply: () => {},
  setPresalePercent: () => {},
  setPresalePrice: () => {},
  setContract: () => {},
  setPaid: () => {},
  clear: () => {},
};

export const ContractInfoContext =
  React.createContext<CnotractInfoType>(defaultVal);

export default function useContractInfo() {
  return React.useContext(ContractInfoContext);
}

export const ContractInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState(0);
  const [network, setNetwork] = useState(0);
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [presalePercent, setPresalePercent] = useState("");
  const [presalePrice, setPresalePrice] = useState("");
  const [maxStep, setMaxStep] = useState(1);
  const [contract, setContract] = useState("");
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    setMaxStep(Math.max(step, maxStep));
  }, [step]);

  const clear = () => {
    setStep(0);
    setNetwork(0);
    setOwner("");
    setName("");
    setSymbol("");
    setTotalSupply("");
    setPresalePercent("");
    setPresalePrice("");
    setMaxStep(1);
    setContract("");
    setPaid(false);
  };

  return (
    <ContractInfoContext.Provider
      value={{
        step,
        network,
        name,
        symbol,
        owner,
        maxStep,
        totalSupply,
        presalePercent,
        presalePrice,
        contract,
        paid,
        setStep,
        setNetwork,
        setName,
        setSymbol,
        setOwner,
        setTotalSupply,
        setPresalePercent,
        setPresalePrice,
        setContract,
        setPaid,
        clear,
      }}
    >
      {children}
    </ContractInfoContext.Provider>
  );
};
