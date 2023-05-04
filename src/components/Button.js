import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const Button = ({ className, onClick, text, loading }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
      {loading ? (
        <Image
          src="/svgs/BtnLoading.svg"
          alt="loading"
          width="25"
          height="25"
        />
      ) : (
        <ChevronRightIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
