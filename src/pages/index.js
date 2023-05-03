import BlogCard from "../components/BlogCard";

import RecentBlogCard from "@/components/RecentBlogCard";
import { getAllPostByCategories, getPostList } from "@/lib/posts";
import { useEffect, useState } from "react";
import ReadMore from "@/components/ReadMore";

export async function getStaticProps() {
  const allPosts = await getPostList();

  return {
    props: {
      allPosts,
    },
  };
}

export default function Home({ allPosts, selectedCategory }) {
  const [windowSize, setWindowSize] = useState();
  const [categoryWisePost, setCategoryWisePost] = useState();
  const [posts, setPosts] = useState(allPosts);

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
          <RecentBlogCard post={posts.nodes[0]} />
        )}
        <div className="w-full inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center">
          {!selectedCategory &&
            posts.nodes.map((post, index) => (
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
        <ReadMore posts={posts} setPosts={setPosts} />
      </div>
    </main>
  );
}
