import Image from "next/image";
import ListItem from "./ListItem";

import { MutualFundItems,InvestingItems,DematAcItems } from "@/utils/datas";


const Header = () => {
  
  return (
    <div className="w-full flex py-3 md:py-5 justify-between items-center sticky top-0 z-50 bg-bgMain">
      <div className="text-darkBlue text-lg md:text-2xl font-sans">
        <span className="font-semibold md:mx-1">KKS</span>
        <span className="font-semibold mx-1">Capitals</span>
        <span className="font-light hidden md:inline">Blogs</span>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex gap-14 font-semibold">
          <li>
            <ListItem itemname="Mutual Funds" data={MutualFundItems}/>
          </li>
          <li>
            <ListItem itemname="Investing" data={InvestingItems}/>
          </li>
          <li>
            <ListItem itemname="Demat Account" data={DematAcItems}/>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <Image src='/svgs/HamburgerMenu.svg' alt="hamburger" width="20" height="20"/>
      </div>
    </div>
  );
};

export default Header;
