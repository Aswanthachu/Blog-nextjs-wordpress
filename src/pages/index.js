import BlogCard from "../components/BlogCard";

import RecentBlogCard from "@/components/RecentBlogCard";
import { getPostList } from "@/lib/posts";
import { useEffect, useState } from "react";
import ExploreMore from "@/components/ExploreMore";

export async function getStaticProps() {
  const allPosts = await getPostList({ no: 10 });

  return {
    props: {
      allPosts,
    },
  };
}

export default function Home({ allPosts, posts, setPosts }) {
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    setPosts(allPosts);
  }, []);

  return (
    <main className="w-full border-t-2 border-darkBlue pb-10">
      <div className="max-w-7xl mx-auto mt-16">
        {windowSize > 640 && <RecentBlogCard post={posts?.nodes[0]} />}
        <div className="w-full inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center">
          {posts && posts?.nodes?.map((post, index) => {
            if (index === 0 && windowSize > 640) {
              return;
            } else {
              return <BlogCard post={post} key={index} />;
            }
          })}
        </div>
        {posts?.pageInfo?.hasNextPage && (
          <ExploreMore posts={posts} setPosts={setPosts} no={9} />
        )}
      </div>
    </main>
  );
}
