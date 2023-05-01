import Image from "next/image";
import Button from "./Button";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

const BlogCard = () => {
    const handleClick=()=>{
        console.log("hiii");
    }
  return (
    <div className="p-4 rounded-3xl bg-white max-w-xs">
      <div className="">
        <img
          src="/images/test1.png"
          alt="test"
          className="object-fill h-full w-full rounded-3xl "
        />
      </div>
      <div className="my-2 px-2">
        <h1 className="text-lg font-semibold">Lorem Ipsum</h1>
        <p className="text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="my-3 flex justify-between">
          <Image src="/svgs/ShareIcon.svg" alt="share" width="20" height="20" />
          <Button text="Read More" onClick={handleClick} className={`bg-darkBlue p-2 text-white rounded-lg flex items-center`} Icon={ChevronRightIcon}/>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
