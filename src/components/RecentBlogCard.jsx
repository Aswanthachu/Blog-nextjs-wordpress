import React from "react";
import { useRouter } from "next/router";

import Button from "./Button";
import Trending from "./Trending";

const RecentBlogCard = ({ post }) => {
  const router = useRouter();

  const handleClick = (slug) => {
    router.push(`/${slug}`);
  };
  console.log(post);

  return (
    <div className="w-full   my-8 lg:my-16 bg-white lg:bg-inherit justify-between items-center hidden md:flex rounded-3xl">
      
      <div className="hidden lg:flex px-16 gap-10">
        <div className="w-1/2 space-y-6 post-content">
          <h1 className="text-xl font-semibold">| Blog</h1>
          <h1 className="text-5xl font-bold">{post?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post?.excerpt }} />
          <Button
            text="Read More"
            onClick={() => handleClick(post?.slug)}
            className={`flex bg-darkBlue p-3 rounded-lg items-center text-white gap-2 hover:scale-110`}
          />
        </div>
        <div className="w-1/2 relative">
          <img
            src={post?.featuredImage?.node?.sourceUrl}
            alt="test"
            className="object-fill h-full w-full max-h-[400px] rounded-3xl"
          />
          <Trending large />
        </div>
      </div>
      <div className="flex lg:hidden flex-col py-10 px-10  gap-5">
        <div className="w-full">
          <img
            src={post?.featuredImage?.node?.sourceUrl}
            alt="test"
            className="object-fill h-full w-full max-h-[400px] rounded-3xl"
          />
          <Trending large />
        </div>
        <div className="space-y-6 post-content ">
          <h1 className="text-5xl font-bold my-5">{post?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post?.excerpt }} />
          <Button
            text="Read More"
            onClick={() => handleClick(post?.slug)}
            className={`flex bg-darkBlue p-3 rounded-lg items-center text-white gap-2 hover:scale-110`}
          />
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;
