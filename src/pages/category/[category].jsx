import BlogCard from "@/components/BlogCard";
import ExploreMore from "@/components/ExploreMore";
import { getAllPostByCategories, getCategorySlugs } from "@/lib/posts";
import { useEffect, useState } from "react";

export async function getStaticProps({ params }) {
  console.log(params.category);
  const categoryPost = await getAllPostByCategories({
    id: params.category,
    no: 9,
  });
  return {
    props: {
      categoryPost,
    },
  };
}

export async function getStaticPaths() {
  const catSlugs = await getCategorySlugs();
  return {
    paths: catSlugs.map((s) => ({
      params: {
        category: s.id,
      },
    })),
    fallback: false,
  };
}

const Category = ({ categoryPost }) => {
  const [posts, setPosts] = useState(categoryPost);

  useEffect(() => {
    setPosts(categoryPost);
  }, [categoryPost]);

  return (
    <main className="w-full border-t-2 border-darkBlue pb-10">
      <div className="max-w-7xl mx-auto mt-16">
        <div className="w-full inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center">
          {posts?.nodes?.map((post, index) => (
            <BlogCard post={post} key={index} />
          ))}
        </div>
        {posts?.pageInfo?.hasNextPage && (
          <ExploreMore posts={posts} setPosts={setPosts} no={9} />
        )}
      </div>
    </main>
  );
};

export default Category;
