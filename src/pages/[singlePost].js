import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import {
  getAllPosts,
  getPostSlugs,
  getSinglePost,
} from "@/lib/posts";
import React, { useEffect, useState } from "react";

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.singlePost);
  console.log(post);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();
  return {
    paths: postSlugs.map((s) => ({
      params: {
        singlePost: s.slug,
      },
    })),
    fallback: false,
  };
}

const SinglePost = ({ post }) => {
  const [posts, setPosts] = useState();
  const handleClick = () => {
    console.log("hiii");
  };

  useEffect(() => {
    async function fetchAllPost() {
      const Posts = await getAllPosts();
      setPosts(Posts);
    }
    fetchAllPost();
  }, []);

  return (
    <>
      <section className="w-full border-t-2 border-darkBlue py-10 px-3 md:px-6 lg:px-10">
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
              {posts?.map((post, index) => (
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
        </div>
      </section>
    </>
  );
};

export default SinglePost;
