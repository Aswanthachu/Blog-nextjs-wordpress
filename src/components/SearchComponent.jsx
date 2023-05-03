import Image from "next/image"

const SearchComponent = ({search,setSearch}) => {
  return (
    <div className="w-[600px]  h-12 bg-white rounded-xl border border-gray-200 flex justify-between items-center">
      <input type="input" placeholder="search here" className="h-full rounded-xl px-5 w-11/12 outline-none hover:outline-none"/>
      <Image src="/svgs/BlueClose.svg" alt="close" width="40" height="40" className="mt-2 p-1" onClick={()=>setSearch(false)}/>
    </div>
  )
}

export default SearchComponent