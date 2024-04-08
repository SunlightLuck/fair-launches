"use client";

import useContractInfo from "@/hooks/useContractInfo";

const Progressbar = () => {
  const { step } = useContractInfo();

  return (
    step > 0 && (
      <div className="fixed top-0 left-0 right-0 w-full h-1 bg-gray-500/30 z-20">
        <div
          className="fixed top-0 left-0 h-1 bg-gray-500 transition-all"
          style={{ width: `${(100 * (step - 1)) / 8}%` }}
        />
      </div>
    )
  );
};

export default Progressbar;
