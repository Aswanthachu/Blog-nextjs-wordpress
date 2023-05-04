import Button from "@/components/Button";
import {
  getAllPostByCategories,
  getPostList,
  searchPosts,
  explorePostsBySearchWithCategories,
} from "@/lib/posts";
import { useRouter } from "next/router";

const ExploreMore = ({
  posts,
  setPosts,
  No,
  Id,
  loading,
  setLoading,
  searchTerm,
  setSearchTerm,
}) => {
  const router=useRouter();
  console.log(Id,No)

  const handleClick = async () => {
    setLoading(true);
    if (posts.pageInfo.hasNextPage) {
      let morePosts;
      {
        /*
      if (id ) {
        morePosts = await getAllPostByCategories({
          id: id,
          no: no,
          after: posts.pageInfo.endCursor,
        });
      } else {
        morePosts = await getPostList({ after: posts.pageInfo.endCursor, no: 9 });
      }
      */
      }

      const path = router.asPath;
      const parts = path.split("/");
      const id = parts[parts.length - 1];
      console.log(id);

      if (id && searchTerm) {
        console.log("hii 1");
        morePosts = await explorePostsBySearchWithCategories({
          id: id,
          searchTerm: searchTerm,
          after: posts.pageInfo.endCursor,
        });
      } 
      else if (Id) {
        morePosts = await getAllPostByCategories({
          id: Id,
          no: No,
          after: posts.pageInfo.endCursor,
        });
      }
      else if (id && !searchTerm) {
        console.log("hii 2");
        morePosts = await getAllPostByCategories({
          id: id || Id,
          no: No || 9,
          after: posts.pageInfo.endCursor,
        });
      } else if (!id && searchTerm) {
        console.log("hii 3");
        morePosts = await searchPosts({
          searchQuery: searchTerm,
          after: posts.pageInfo.endCursor,
        });
      }
       else {
        console.log("hii 4");
        morePosts = await getPostList({
          after: posts.pageInfo.endCursor,
          no: 9,
        });
      }

      const updatedPosts = {
        ...posts,
      };

      if (morePosts) {
        updatedPosts.nodes = updatedPosts?.nodes?.concat(morePosts?.nodes);
        updatedPosts.pageInfo = morePosts?.pageInfo;
      }
      setPosts(updatedPosts);
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-16">
      <Button
        text="Explore"
        className={`bg-darkBlue flex items-center text-white p-3 rounded-lg hover:scale-110 gap-2`}
        onClick={handleClick}
        loading={loading}
      />
    </div>
  );
};

export default ExploreMore;
