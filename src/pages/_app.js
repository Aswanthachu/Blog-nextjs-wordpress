import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen px-20 py">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
