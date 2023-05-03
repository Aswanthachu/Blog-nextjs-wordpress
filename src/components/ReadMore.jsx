import Button from "@/components/Button";
import { getPostList } from "@/lib/posts";

const ReadMore = ({ posts, setPosts }) => {
  const handleClick = async () => {
    const morePosts = await getPostList(posts.pageInfo.endCursor);

    const updatedPosts = {
      ...posts,
    };
    console.log(updatedPosts);
    console.log(morePosts);
    if (morePosts) {
      updatedPosts.nodes = updatedPosts?.nodes?.concat(morePosts?.nodes);
      updatedPosts.pageInfo = morePosts?.pageInfo;
    }
    console.log(updatedPosts);
    setPosts(updatedPosts);
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

export default ReadMore;
