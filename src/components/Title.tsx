import ArrowRight from "./svgs/ArrowRight";

interface TitleProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ index, children, className }) => {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="absolute flex items-center top-0 h-7 md:h-8 -translate-x-full pr-2 max-md:text-sm">
        <span>{index}</span>
        <ArrowRight className="ml-1 max-md:w-3" />
      </div>
      <span className="text-xl md:text-2xl">{children}</span>
    </div>
  );
};

export default Title;
