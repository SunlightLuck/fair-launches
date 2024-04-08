interface CheckProps {
  className?: string;
}

const Check: React.FC<CheckProps> = ({ className }) => (
  <svg height="13" width="16" className={className ?? ""}>
    <path
      d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"
      fill="currentColor"
    ></path>
  </svg>
);

export default Check;
