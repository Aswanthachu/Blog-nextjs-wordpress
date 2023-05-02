import Button from "@/components/Button";
import BlogCard from "../components/BlogCard";

import RecentBlogCard from "@/components/RecentBlogCard";
import { getAllPostByCategories, getAllPosts } from "@/lib/posts";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}

export default function Home({ allPosts, selectedCategory }) {
  const [windowSize, setWindowSize] = useState();
  const [categoryWisePost, setCategoryWisePost] = useState();
  const handleClick = () => {
    
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      async function fetchData() {
        const categoryPost = await getAllPostByCategories(selectedCategory.id);
        console.log(categoryPost);
        setCategoryWisePost(categoryPost);
      }
      fetchData();
    }
  }, [selectedCategory]);

  return (
    <main className="w-full border-t-2 border-darkBlue pb-10">
      <div className="max-w-7xl mx-auto mt-16">
        {windowSize > 1024 && !selectedCategory && (
          <RecentBlogCard post={allPosts[0]} />
        )}
        <div className="w-full inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center">
          {!selectedCategory &&
            allPosts.map((post, index) => (
              <>
                {!(index === 0 && windowSize > 1024) && (
                  <BlogCard post={post} key={index} />
                )}
              </>
            ))}
          {selectedCategory &&
            categoryWisePost?.map((post, index) => (
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
