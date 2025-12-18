import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import ForecastSection from "@/components/ForecastSection";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-x-3 md:grid-cols-12 grid-rows-2">
      <LeftSection />
      <RightSection />
      <ForecastSection />
    </main>
  );
}
