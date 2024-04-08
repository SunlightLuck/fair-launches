import Error from "./svgs/Error";

interface WarningProps {
  text: string;
  className?: string;
}

const Warning: React.FC<WarningProps> = ({ text, className }) => {
  return (
    <div
      className={`flex flex-wrap items-center w-fit px-2 text-[#3E9513] bg-[#D6F9DB] text-xs ${
        className ?? ""
      }`}
    >
      <Error />
      <span className="font-bold mr-1">Warning!</span>
      <span className="break-words">{text}</span>
    </div>
  );
};

export default Warning;
