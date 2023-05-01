import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const ListItem = ({ itemname, data }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex justify-center items-center">
        <Menu.Button
          onMouseEnter={({ target }) => console.log(target)}
          className=" inline-flex w-full justify-center items-center text-base text-darkBlue font-semibold"
        >
          {itemname}
          <svg
            className="w-5 h-5 ml-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-[-40px] z-10 mt-2 min-w-[250px] origin-top-right bg-[#fafafa] rounded-xl">
          <div className="shadow-2xl rounded-xl">
            <Menu.Item>
              <>
                {data.map((i) => (
                  <Link key={i.id} href={`${i.link}`} className="flex border-b border-darkBlue px-5 py-2 w-full text-sm text-darkBlue font-semibold font-main">
                    {i.name}
                  </Link>
                ))}
              </>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ListItem;
