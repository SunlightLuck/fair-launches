import useContractInfo from "@/hooks/useContractInfo";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { chains } from "@/constants/chains";
import Button from "./Button";
import Metamask from "@/assets/metamask.svg";
import { useWalletClient } from "wagmi";

interface FinalProps {
  index: number;
}

const Final: React.FC<FinalProps> = ({ index }) => {
  const { step, network, contract, clear, symbol } = useContractInfo();
  const { data: walletClient } = useWalletClient();

  const onAddToken = async () => {
    try {
      if (!walletClient) return;
      await walletClient.watchAsset({
        options: {
          address: contract,
          decimals: 18,
          symbol,
        },
        type: "ERC20",
      });
    } catch (err) {
      console.log(err);
    }
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
      className={"my-auto pb-12 w-full flex flex-col items-center"}
    >
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
      />
      <div className="text-center md:text-lg mt-10 font-medium text-[#969696]">
        Here&apos;s your contract deployed.
      </div>
      <div className="text-center mt-4 text-lg md:text-xl break-words">
        <Link
          href={`${
            chains.find((item) => item.id === network)?.blockExplorers?.default
              ?.url
          }/token/${contract}`}
          target="_blank"
          rel="noreferrer"
          className="text-[#6A6A6A] hover:text-[#333] transition-all"
        >
          {contract}
        </Link>
      </div>
      <Button onClick={onAddToken} className="mt-4">
        <Image
          src={Metamask.src}
          width={Metamask.width}
          height={Metamask.height}
          alt="metamask"
          className="w-5 h-5 mr-2"
        />
        Add {symbol} to Metamask
      </Button>
      <div className="flex justify-center mt-8">
        <Button onClick={clear}>Confirm</Button>
      </div>
    </Transition>
  );
};

export default Final;
