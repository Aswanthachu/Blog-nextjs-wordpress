import Image from "next/image";
import ListItem from "./ListItem";

import { MutualFundItems,InvestingItems,DematAcItems } from "@/utils/datas";


const Header = () => {
  

  return (
    <div className="w-full flex py-5 justify-between sticky top-0 z-50 bg-white">
      <div className="text-darkBlue text-2xl font-sans">
        <span className="font-bold mx-1">KKS</span>
        <span className="font-semibold mx-1">Capitals</span>
        Blogs
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
        <Image src='/svgs/HamburgerMenu.svg' alt="hamburger" width="64" height="64"/>
      </div>
    </div>
  );
};

export default Header;
