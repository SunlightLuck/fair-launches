interface RadioGroupProps {
  text: string;
  checked: boolean;
  onChange: any;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  text,
  checked,
  onChange,
  className,
}) => {
  return (
    <div
      className={`flex items-center cursor-pointer group py-1 ${
        className ?? ""
      }`}
      onClick={onChange}
    >
      <div className="relative w-6 md:w-7 h-6 md:h-7 rounded-[9px] md:rounded-[10px] border border-[#CCC]">
        <div
          data-checked={checked}
          className="absolute top-[7px] md:top-2 left-[5px] md:left-1.5 w-[12px] md:w-[15px] h-[5px] md:h-[6px] border-l-2 border-b-2 -rotate-45 border-transparent data-[checked=true]:border-[#333] transition-all"
        />
      </div>
      <span className="text-sm md:text-base text-[#6A6A6A] leading-[153%] ml-3 group-hover:text-[#333] transition-all">
        {text}
      </span>
    </div>
  );
};

export default RadioGroup;
