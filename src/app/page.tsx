import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import ForecastSection from "@/components/ForecastSection";
import { getWeather } from "@/lib/api";

export default async function Home() {
  const [weather] = await Promise.all([
    getWeather(),
  ]);

  return (
    <main className="grid grid-cols-4 gap-x-3 md:grid-cols-12 grid-rows-2">
      <LeftSection />
      <RightSection weather={weather} />
      <ForecastSection />
    </main>
  );
}
