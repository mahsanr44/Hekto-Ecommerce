import Featured from "@/Components/Widgets/Featured";
import Hero from "./Components/Widgets/Hero";
import Discount from "./Components/Widgets/Discount";
import NewsLetter from "./Components/Widgets/NewsLetter";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* @ts-ignore */}
      <Featured/>
      <Discount/>
      <NewsLetter/>
    </div>
  )
}
