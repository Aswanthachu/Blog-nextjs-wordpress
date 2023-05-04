import Image from "next/image";

const NoPostAvailable = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[600px] w-full gap-5">
      <Image src="/svgs/Camera.svg" alt="no-post" height="100" width="100" />
      <h1 className="text-xl font-semibold">Oops! No Posts Available.</h1>
      <button className="flex justify-between items-center w-fit gap-2 text-lg font-semibold border-2 border-gray-400 p-2 rounded-xl hover:scale-105"
       onClick={()=>handleBackButtonClick()}
      >
        <Image src="/svgs/Back.svg" alt="back" width="30" height="30" />
        Back
      </button>
    </div>
  );
};

export default NoPostAvailable;
