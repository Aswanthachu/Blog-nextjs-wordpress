import Button from "@/components/Button";
import BlogCard from "../components/BlogCard";

import RecentBlogCard from "@/components/RecentBlogCard";
import { getAllPosts } from "@/lib/posts";

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}

export default function Home({ allPosts }) {
  const handleClick = () => {
    console.log("hiii");
  };

  return (
    <main className="w-full border-t-2 border-darkBlue pb-10">
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-xl font-semibold md:text-4xl md:font-medium my-10 lg:ml-12">
          Exclusive Blog
        </h1>
        <RecentBlogCard post={allPosts[0]} />
        <div className="w-full inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center">
          {allPosts.map((post, index) => (
            <BlogCard post={post} key={index} />
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-16">
          <Button
            text="Explore"
            className={`bg-darkBlue flex items-center text-white p-3 rounded-lg hover:scale-110`}
            onClick={handleClick}
          />
        </div>
      </div>
    </main>
  );
}
