import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Button = ({ className, onClick, text}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
      <ChevronRightIcon className="w-5 h-5"/>
    </button>
  );
};

export default Button;
