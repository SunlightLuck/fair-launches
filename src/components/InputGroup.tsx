interface InputGroupProps {
  type?: string;
  placeholder: string;
  right?: React.ReactNode;
  value: string;
  setValue: any;
  className?: string;
  inputClassName?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  type,
  value,
  setValue,
  right,
  placeholder,
  className,
  inputClassName,
}) => {
  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <input
        type={type ?? "text"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className={`text-lg md:text-2xl placeholder:text-[#CCC] w-full bg-transparent outline-none text-[#4D4D4D] shadow-[rgba(77,77,77,0.3)_0px_1px] focus:shadow-[rgba(77,77,77)_0px_2px] transition-all ${
          inputClassName ?? ""
        }`}
      />
      {right}
    </div>
  );
};

export default InputGroup;
