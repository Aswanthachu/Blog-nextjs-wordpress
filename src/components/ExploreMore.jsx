import Button from "@/components/Button";
import { getAllPostByCategories, getPostList } from "@/lib/posts";

const ExploreMore = ({ posts, setPosts, id, no }) => {
  console.log(id);
  const handleClick = async () => {
    if (posts.pageInfo.hasNextPage) {
      let morePosts;
      if (id) {
        morePosts = await getAllPostByCategories({
          id: id,
          no: no,
          after: posts.pageInfo.endCursor,
        });
      } else {
        morePosts = await getPostList({ after: posts.pageInfo.endCursor, no: 9 });
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
        className={`bg-darkBlue flex items-center text-white p-3 rounded-lg hover:scale-110`}
        onClick={handleClick}
      />
    </div>
  );
};

export default ExploreMore;
