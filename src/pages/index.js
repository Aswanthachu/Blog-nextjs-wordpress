import BlogCard from "../components/BlogCard";

import RecentBlogCard from "@/components/RecentBlogCard";
import { getPostList } from "@/lib/posts";
import { useEffect, useState } from "react";
import ExploreMore from "@/components/ExploreMore";
import NoPostAvailable from "@/components/NoPostAvailable";
import Loading from "@/components/Loading";

export async function getStaticProps() {
  let allPosts;
  allPosts = await getPostList({ no: 10 });
  return {
    props: {
      allPosts,
    },
  };
}

export default function Home({
  allPosts,
  posts,
  setPosts,
  loading,
  setLoading,
  searchTerm,
  setSearchTerm,
  pageLoading,
  setPageLoading,
}) {
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    setPosts(allPosts);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [posts]);

  useEffect(() => {
    setSearchTerm();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setPageLoading(true);
  }, []);

  useEffect(() => {
    setPageLoading(false);
  }, [allPosts]);

  console.log(allPosts);

  return (
    <main className="w-full border-t-2 border-darkBlue pb-10">
      {!pageLoading ? (
        <>
          {posts?.nodes?.length > 0 ? (
            <div className="max-w-7xl mx-auto mt-16">
              <RecentBlogCard
                post={posts?.nodes[0]}
                setPageLoading={setPageLoading}
              />
              <div className="w-full inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center">
                {posts &&
                  posts?.nodes?.map((post, index) => {
                    if (index === 0 && windowSize > 640) {
                      return;
                    } else {
                      return (
                        <BlogCard
                          post={post}
                          key={index}
                          setPageLoading={setPageLoading}
                          category={post?.categories?.nodes[0]?.slug}
                        />
                      );
                    }
                  })}
              </div>
              {posts?.pageInfo?.hasNextPage && (
                <ExploreMore
                  posts={posts}
                  setPosts={setPosts}
                  no={9}
                  loading={loading}
                  setLoading={setLoading}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              )}
            </div>
          ) : (
            <NoPostAvailable setPageLoading={setPageLoading}/>
          )}
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
