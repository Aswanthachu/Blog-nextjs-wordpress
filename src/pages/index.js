import BlogCard from "../components/BlogCard";

import RecentBlogCard from "@/components/RecentBlogCard";
import { getPostList } from "@/lib/posts";
import { useEffect, useState } from "react";
import ExploreMore from "@/components/ExploreMore";

export async function getStaticProps() {
  const allPosts = await getPostList();

  return {
    props: {
      allPosts,
    },
  };
}

export default function Home({ allPosts }) {
  const [windowSize, setWindowSize] = useState();
  const [posts, setPosts] = useState(allPosts);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <main className="w-full border-t-2 border-darkBlue pb-10">
      <div className="max-w-7xl mx-auto mt-16">
        {windowSize > 1024 && <RecentBlogCard post={posts.nodes[0]} />}
        <div className="w-full inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center">
          {posts.nodes.map((post, index) => (
            <>
              {!(index === 0 && windowSize > 1024) && (
                <BlogCard post={post} key={index} />
              )}
            </>
          ))}
        </div>
        {posts?.pageInfo?.hasNextPage && (
          <ExploreMore posts={posts} setPosts={setPosts} no={9} />
        )}
      </div>
    </main>
  );
}
