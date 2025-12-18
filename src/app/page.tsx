import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import ForecastSection from "@/components/ForecastSection";
import { getWeather, getActivities } from "@/lib/api";

export default async function Home() {
  const [weather, activities] = await Promise.all([
    getWeather(),
    getActivities(),
  ]);

  return (
    <main className="grid grid-cols-4 gap-x-3 md:grid-cols-12 grid-rows-2">
      <LeftSection />
      <RightSection weather={weather} activities={activities} />
      <ForecastSection />
    </main>
  );
}
