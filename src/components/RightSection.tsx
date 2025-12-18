import ActivityCard from "@/components/ActivityCard";
import { WeatherResponse, ActivitiesResponse } from "@/lib/api";
import { FahrenheitToCelsius } from "@/utils/utils";

export default function RightSection({ weather, activities }: { weather: WeatherResponse, activities: ActivitiesResponse }) {
    const { temperature, weatherInfo } = weather;

    const suitableActivities = activities.activities.filter((activity) => activity.minTemp <= temperature.temp && activity.maxTemp >= temperature.temp);

    const unsuitableActivities = activities.activities.filter((activity) => activity.minTemp > temperature.temp || activity.maxTemp < temperature.temp);

    return (
        <section className="col-span-full max-md:pb-12 md:pt-7.5 md:col-span-6 lg:col-span-5 md:col-start-7 lg:col-start-8 py-5 gap-y-7.5 md:gap-y-12.5 max-md:px-5 flex flex-col bg-white text-black max-md:order-last md:pr-8 lg:pr-16 xl:pr-20 2xl:pr-32 row-span-2">
            <div className="bg-rose rounded-md col-span-full p-5 md:p-7.5 flex flex-col md:flex-row gap-y-2.5 gap-x-6 md:items-center">
                <h2 className="font-semibold">{temperature.metric === "CELCIUS" ? temperature.temp : FahrenheitToCelsius(temperature.temp)}°</h2>
                <div className="flex flex-col gap-y-2.5">
                    <h6 className="font-semibold">{weatherInfo[0].title}</h6>
                    <p>{weatherInfo[0].description}</p>
                </div>
            </div>

            {suitableActivities.length > 0 && (
                <ul className="col-span-full">
                    <h5 className="font-semibold">Some things you could do:</h5>

                    {suitableActivities.map((activity) => (
                        <ActivityCard key={activity.id} {...activity} />
                    ))}
                </ul>
            )}

            {unsuitableActivities.length > 0 && (
                <ul className="col-span-full">
                    <h5 className="font-semibold">Some things you should not do:</h5>

                    {unsuitableActivities.map((activity) => (
                        <ActivityCard key={activity.id} {...activity} />
                    ))}
                </ul>
            )}
        </section>
    );
}