import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="p-4 rounded-3xl bg-white max-w-sm">
      <div className="">
        <img
          src="/images/test1.png"
          alt="test"
          className="object-fill h-full w-full rounded-3xl "
        />
      </div>
      <div className="my-2 px-2">
        <h1 className="text-lg font-semibold">Lorem Ipsum</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsu
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
