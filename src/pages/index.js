import BlogCard from "../components/BlogCard";
export default function Home() {
  return (
    <main className="w-full border-t-2 border-darkBlue">
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-4xl font-medium my-10">Exclusive Blog</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard />
        </div>
      </div>
    </main>
  );
}
