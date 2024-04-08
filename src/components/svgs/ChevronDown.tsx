interface ChevronDownProps {
  className?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({ className }) => (
  <svg height="9" width="14" className={className ?? ""}>
    <path
      d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"
      fill="currentColor"
    ></path>
  </svg>
);

export default ChevronDown;
