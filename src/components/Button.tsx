"use client";

import Spinner from "./Spinner";

interface ButtonProps {
  children: React.ReactNode;
  onClick: any;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  loading,
  disabled,
  className,
}) => {
  return (
    <button
      className={`flex justify-center items-center shadow-[rgba(0,0,0,0.1)_0px_3px_12px_0px] bg-[#E8E8E8] font-bold border border-transparent text-[#696969] py-1.5 px-3.5 hover:bg-[#DDD] active:bg-[#CCC] rounded-[4px] disabled:bg-[#CECECE] ${
        className ?? ""
      }`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <Spinner className="stroke-[#CCC]" /> : children}
    </button>
  );
};

export default Button;
