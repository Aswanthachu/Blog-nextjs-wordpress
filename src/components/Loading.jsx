import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[600px] w-full">
      <Image
        src="/svgs/PageLoading.svg"
        width="200"
        height="200"
        alt="loading"
      />
    </div>
  );
};

export default Loading;
