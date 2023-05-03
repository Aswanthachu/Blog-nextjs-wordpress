import { searchPosts, searchPostsByCategory } from "@/lib/posts";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchComponent = ({ search, setSearch, setPosts }) => {
  const router = useRouter();
  const [searchQuery, setQuery] = useState("");

  const keyDownHandler = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (router.pathname === "/") {
        const searchedPosts = await searchPosts(searchQuery);
        setPosts(searchedPosts);
        setSearch(false);
      } else {
        console.log("hello");
        const path = router.asPath;
        const parts = path.split("/");
        const slug = parts[parts.length - 1];
        const searchedPosts = await searchPostsByCategory({
          searchQuery,
          slug,
        });
        setPosts(searchedPosts);
        setSearch(false);
      }
    }
  };

  return (
    <div className="w-[600px]  h-12 bg-white rounded-xl border border-gray-200 flex justify-between items-center">
      <input
        type="input"
        placeholder="search here"
        className="h-full rounded-xl px-5 w-11/12 outline-none hover:outline-none"
        value={searchQuery}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={keyDownHandler}
      />
      <Image
        src="/svgs/BlueClose.svg"
        alt="close"
        width="40"
        height="40"
        className="mt-2 p-1"
        onClick={() => setSearch(false)}
      />
    </div>
  );
};

export default SearchComponent;
