import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

import Button from "./Button";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Trending from "./Trending";

const BlogCard = ({ post, setPageLoading, category }) => {
  const router = useRouter();

  console.log(post);

  function findValueBySlug(objectsArray, targetSlug) {
    for (let i = 0; i < objectsArray?.length; i++) {
      const obj = objectsArray[i];
      if (obj.hasOwnProperty('slug') && obj.slug === targetSlug) {
        return true; // Assuming the desired value is stored in a key called "value"
      }
    }
    
    // Return null or handle the case when the slug is not found
    return false;
  }

  const handleClick = (slug) => {
    setPageLoading(true);
    router.push(`/${slug}`);
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
    <div className="py-3 rounded-3xl bg-white max-w-xs w-full h-[550px] relative">
      <div className="px-3">
        {post?.featuredImage?.node?.sourceUrl ? (
          <img
            src={post?.featuredImage?.node?.sourceUrl}
            alt="test"
            className="object-fill w-full rounded-3xl h-[200px]"
          />
        ) : (
          <Image
            src="/images/NoImage.png"
            alt="No-image"
            height="400"
            width="400"
            className="object-fill w-full rounded-3xl h-[200px]"
          />
        )}
        {findValueBySlug(post?.categories?.nodes,'trending') && <Trending small />}
      </div>
      <div className="my-2  post-content">
        <h1 className="text-lg font-semibold  px-3">{post.title}</h1>
        {/*
        <p className="text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        */}
        <div className="w-full px-3">
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </div>
        <div className="absolute bottom-0 w-full ">
          <div className="mt-3 mb-6 flex justify-between px-6">
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
              onClick={() => handleClick(post.slug)}
              className={`bg-darkBlue p-2 text-white rounded-lg flex items-center hover:scale-110`}
              Icon={ChevronRightIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
