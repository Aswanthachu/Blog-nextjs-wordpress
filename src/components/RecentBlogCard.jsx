import React from "react";
import { useRouter } from "next/router";

import Button from "./Button";
import Trending from "./Trending";

const RecentBlogCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/fghjk");
  };

  return (
    <div className="w-full px-16 my-16 flex justify-between items-center gap-10">
      <div className="w-1/2 space-y-6">
        <h1 className="text-xl font-semibold">| Blog</h1>
        <h1 className="text-5xl font-bold">Why Stock Market</h1>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet. Non officiis doloremque vel veniam neque
          est blanditiis. Lorem ipsum dolor sit amet. Non officiis doloremque
          vel veniam neque est blanditiis.
        </p>
        <Button
          text="Read More"
          onClick={handleClick}
          className={`flex bg-darkBlue p-3 rounded-lg items-center text-white gap-2`}
        />
      </div>
      <div className="w-1/2 relative">
        <img
          src="/images/test1.png"
          alt="test"
          className="object-fill h-full w-full rounded-3xl "
        />
        <Trending large />
      </div>
    </div>
  );
};

export default RecentBlogCard;
