
import Button from "@/components/Button";
import BlogCard from "../components/BlogCard";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const handleClick = () => {
    console.log("hiii");
    
  };

  return (
    <main className="w-full border-t-2 border-darkBlue pb-10">
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-xl font-semibold md:text-4xl md:font-medium my-10 lg:ml-12">
          Exclusive Blog
        </h1>
        <div className="w-full inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 place-items-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="w-full flex justify-center items-center mt-16">
          <Button
            text="Explore"
            className={`bg-darkBlue flex items-center text-white p-3 rounded-lg`}
            onClick={handleClick}
          />
        </div>
      </div>
    </main>
  );
}
