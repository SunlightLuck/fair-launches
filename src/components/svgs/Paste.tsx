interface PasteProps {
  className?: string;
}

const Paste: React.FC<PasteProps> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="200px"
    width="200px"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path>
  </svg>
);

export default Paste;
