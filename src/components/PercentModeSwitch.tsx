interface PercentModeSwitchProps {
  value: boolean;
  setValue: any;
  className?: string;
}

const PercentModeSwitch: React.FC<PercentModeSwitchProps> = ({
  value,
  setValue,
  className,
}) => {
  return (
    <div
      className={`flex cursor-pointer bg-[#E2E2E2] p-0.5 w-fit rounded-[4px] ${
        className ?? ""
      }`}
    >
      <div
        data-active={!value}
        className="flex items-center justify-center w-9 h-8 data-[active=true]:bg-[#EEE] text-[#696969] text-xs transition-all rounded-[4px]"
        onClick={() => setValue(false)}
      >
        %
      </div>
      <div
        data-active={value}
        className="flex items-center justify-center w-9 h-8 data-[active=true]:bg-[#EEE] text-[#696969] text-xs transition-all rounded-[4px]"
        onClick={() => setValue(true)}
      >
        123
      </div>
    </div>
  );
};

export default PercentModeSwitch;
