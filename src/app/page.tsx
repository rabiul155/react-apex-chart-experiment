import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("@/components/Chart"), { ssr: false });
const Chart2 = dynamic(() => import("@/components/Chart2"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Chart />
      <Chart2 />
    </main>
  );
}
