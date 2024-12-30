import Image from "next/image";
import Blog from "./blog/page";
import Hero from "./component/hero";

export default function Home() {
  return (
    <>
    <Hero/>
    <Blog/>
    </>
  );
}
