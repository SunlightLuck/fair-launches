"use client";

import { FEES, chains } from "@/constants/chains";
import useContractInfo from "@/hooks/useContractInfo";
import Image, { StaticImageData } from "next/image";

interface NetworkCardProps {
  image: StaticImageData;
  name: string;
  label: string;
  chain: number;
  status: string;
  className?: string;
}

const NetworkCard: React.FC<NetworkCardProps> = ({
  image,
  name,
  label,
  chain,
  status,
  className,
}) => {
  const { network, setNetwork } = useContractInfo();

  return (
    <div
      data-active={network === chain}
      className={`relative flex flex-col justify-between bg-[#4D4D4D]/10 border border-[#777] py-2 px-3 rounded-md cursor-pointer hover:border-[#aaa] hover:scale-[1.02] transition-all data-[active=true]:border-black data-[active=true]:shadow-[inset_0_0_3px_black] hover:bg-[#4D4D4D]/30 ${
        className ?? ""
      }`}
      onClick={() => setNetwork(chain)}
    >
      <div
        className={`absolute top-3.5 right-3.5 w-2.5 h-2.5 rounded-full ${
          status === "on"
            ? "bg-green-500 drop-shadow-[0_0_3px_#22C55E]"
            : status === "off"
            ? "bg-red-500 drop-shadow-[0_0_3px_#EF4444]"
            : "bg-yellow-400 drop-shadow-[0_0_3px_#AD9200]"
        }`}
      />
      <div
        data-active={network === chain}
        className="absolute flex items-center justify-center text-sm font-medium top-2 left-2 w-6 h-6 bg-white data-[active=true]:bg- border border-[#999] data-[active=true]:bg-[#999] data-[active=true]:text-white transition-all"
      >
        {label}
      </div>
      <div className="flex justify-center items-center h-[160px]">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={name}
          className="max-h-[110px] w-auto grayscale"
        />
      </div>
      <div className="mt-4">{name}</div>
      <div className="text-xs text-[#9A9A9A]">
        FEE:{" "}
        {
          //@ts-ignore
          FEES[chain]
        }{" "}
        {chains.find((item) => item.id === chain)?.nativeCurrency?.symbol}
      </div>
    </div>
  );
};

export default NetworkCard;
