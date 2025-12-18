import IntroductionSection from "@/components/IntroductionSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ForecastSection from "@/components/ForecastSection";
import { getWeather, getActivities, getForecast } from "@/lib/api";

export default async function Home() {
  const [weather, activities, forecast] = await Promise.all([
    getWeather(),
    getActivities(),
    getForecast(),
  ]);

  return (
    <main className="grid grid-cols-4 gap-x-3 md:grid-cols-12 grid-rows-2">
      <IntroductionSection />
      <ActivitiesSection weather={weather} activities={activities} />
      <ForecastSection forecast={forecast} />
    </main>
  );
}
