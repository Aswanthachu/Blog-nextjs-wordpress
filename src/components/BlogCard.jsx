import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

import Button from "./Button";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Trending from "./Trending";

const BlogCard = ({post}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/fghjk");
  };

  const copyTOClipboard = (slug) => {
    navigator.clipboard.writeText(`http:localhost:3000/${slug}`);
    toast.success("link copied to clipboard", {
      style: {
        boxShadow: "none",
      },
    });
  };

  return (
    <div className="p-4 rounded-3xl bg-white max-w-xs max-h-[600px]">
      <div className="relative">
        <img
          src={post.featuredImage.node.sourceUrl}
          alt="test"
          className="object-fill w-full rounded-3xl h-[200px]"
        />
        <Trending small />
      </div>
      <div className="my-2 px-2 post-content">
        <h1 className="text-lg font-semibold">{post.title}</h1>
        {/*
        <p className="text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        */}
        <div dangerouslySetInnerHTML={{__html:post.excerpt}} />
        <div className="my-3 flex justify-between">
          <Image
            src="/svgs/ShareIcon.svg"
            alt="share"
            width="20"
            height="20"
            className="cursor-pointer hover:scale-150"
            onClick={() => copyTOClipboard(post.slug)}
          />
          <Toaster />
          <Button
            text="Read More"
            onClick={handleClick}
            className={`bg-darkBlue p-2 text-white rounded-lg flex items-center hover:scale-110`}
            Icon={ChevronRightIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
