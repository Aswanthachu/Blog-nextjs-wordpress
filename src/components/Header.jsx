import { getAllCategories } from "@/lib/posts";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Link from "next/link";
import SearchComponent from "./SearchComponent";
{
  /*
import ListItem from "./ListItem";
import { MutualFundItems,InvestingItems,DematAcItems } from "@/utils/datas";
*/
}

const Header = ({posts,setPosts}) => {
  const router = useRouter();
  const [categories, setCategories] = useState();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [search, setSearch] = useState(false);

  const handleClick = () => setShowMobileMenu(!showMobileMenu);

  useEffect(() => {
    async function fetchData() {
      const categories = await getAllCategories();
      setCategories(categories);
    }
    fetchData();
  }, []);

  const handleSelectCategory = (c) => {
    setShowMobileMenu(false);
    router.push(`/category/${c.id}`);
  };

  return (
    <>
      <div className="w-full flex py-3 md:py-5 justify-between items-center sticky top-0 z-40 bg-bgMain">
        <Link href="/" className="text-darkBlue text-lg md:text-2xl font-sans">
          <span className="font-semibold md:mx-1">KKS</span>
          <span className="font-semibold mx-1">Capitals</span>
          <span className="font-light hidden md:inline">Blogs</span>
        </Link>
        <div className="hidden lg:inline">
          <ul className="flex gap-14 font-semibold items-center">
            {!search ? (
              <>
                {categories?.map((c, index, arr) => {
                  if (arr.length <= 3 || index < 3) {
                    return (
                      <li
                        key={index}
                        className="p-3 hover:cursor-pointer"
                        onClick={() => handleSelectCategory(c)}
                      >
                        {c.name}
                      </li>
                    );
                  }
                })}
                {categories?.length > 3 && (
                  <ListItem itemname="More" data={categories.slice(3)} />
                )}
                <Image
                  src="/svgs/Search.svg"
                  alt="search"
                  width="40"
                  height="40"
                  className="p-2 hover:cursor-pointer"
                  onClick={() => setSearch(true)}
                />
              </>
            ) : (
              <SearchComponent search={search} setSearch={setSearch} setPosts={setPosts}/>
            )}
 
          </ul>
        </div>

        <button
          onClick={handleClick}
          type="button"
          className=" flex  lg:hidden justify-end"
        >
          {!showMobileMenu && (
            <Image
              src="/svgs/HamburgerMenu.svg"
              alt="ham"
              width="24"
              height="24"
            />
          )}
        </button>
      </div>

      <div
        className={`top-0 left-0 w-screen   text-white fixed h-full overflow-scroll scr z-50  transition-all ease-in-out duration-700 ${
          showMobileMenu ? "translate-y-0 " : "translate-y-[-100%]"
        }`}
      >
        <div className=" h-fit mb-5 lg:hidden bg-darkBlue relative">
          <div className="text-darkBlue text-xl font-semibold leading-loose">
            <ul className="p-5 space-y-5">
              {categories?.map((list, index) => (
                <li
                  key={index}
                  className={`flex px-6 py-3  w-full  cursor-pointer items-center`}
                  onClick={() => handleSelectCategory(list)}
                >
                  <p className={`text-sm text-white`}>{list.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/svgs/Close.svg"
            alt="close"
            width="70"
            height="70"
            className="absolute top-1 right-1 md:top-5 md:right-5 p-3 md:p-2"
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </>
  );
};

export default Header;


           {/*
          <li>
        <ListItem itemname="Mutual Funds" data={MutualFundItems}/>
          </li>
          <li>
         <ListItem itemname="Investing" data={InvestingItems}/>
          </li>
          <li>
    <ListItem itemname="Demat Account" data={DematAcItems}/>
          </li>
        */}