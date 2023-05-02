import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [selectedCategory,setSelectedCategory]=useState();
  const pageProp={selectedCategory,...pageProps}
  return (
    <>
      <div className="w-full min-h-screen px-5 md:px-20 bg-bgMain">
        <Header setSelectedCategory={setSelectedCategory}/>
        <Component {...pageProp} />
      </div>
      <Footer />
    </>
  );
}
