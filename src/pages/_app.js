import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [posts, setPosts] = useState();
  const pageProp = { posts, setPosts, ...pageProps };
  return (
    <>
      <div className="w-full min-h-screen px-5 md:px-20 bg-bgMain">
        <Header posts={posts} setPosts={setPosts} />
        <Component {...pageProp} />
      </div>
      <Footer />
    </>
  );
}
