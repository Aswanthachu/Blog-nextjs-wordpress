import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import ExploreMore from "@/components/ExploreMore";
import Loading from "@/components/Loading";
import {
  getAllPostByCategories,
  getPostSlugs,
  getSinglePost,
} from "@/lib/posts";
import React, { useEffect, useState } from "react";

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.singlePost);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();
  console.log(postSlugs);
  return {
    paths: postSlugs.map((s) => ({
      params: {
        singlePost: s.slug,
      },
    })),
    fallback: false,
  };
}

const SinglePost = ({
  post,
  loading,
  setLoading,
  setSearchTerm,
  pageLoading,
  setPageLoading,
}) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchSuggestedPost() {
      const Posts = await getAllPostByCategories({
        id: post?.categories?.nodes[0]?.id,
        no: 6,
      });
      setPosts(Posts);
    }
    fetchSuggestedPost();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [posts]);

  useEffect(() => {
    setSearchTerm();
  }, []);

  useEffect(() => {
    setPageLoading(false);
  }, [post]);

  return (
    <>
      <section className="w-full border-t-2 border-darkBlue py-10 px-3 md:px-6 lg:px-10">
        {!pageLoading ? (
          <>
            <div className="post-content  py-10  lg:px-28">
              <h1 className="font-bold text-2xl mb-5">{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            <div className="w-full mt-28">
              <div className="max-w-7xl mx-auto mt-10">
                <h1 className="text-xl font-semibold md:text-4xl md:font-medium my-10 lg:ml-12">
                  | More Blogs
                </h1>
                <div className="w-full inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center">
                  {posts?.nodes?.map((p, index) => (
                    <BlogCard post={p} key={index} />
                  ))}
                </div>
                {posts?.pageInfo?.hasNextPage && (
                  <ExploreMore
                    posts={posts}
                    setPosts={setPosts}
                    Id={post?.categories?.nodes[0]?.id}
                    No={6}
                    loading={loading}
                    setLoading={setLoading}
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default SinglePost;
