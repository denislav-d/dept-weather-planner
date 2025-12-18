import { WeatherResponse } from "@/lib/api";

export default function RightSection({ weather }: { weather: WeatherResponse }) {
    const { temperature, weatherInfo } = weather;

    return (
        <section className="col-span-full md:col-span-6 py-5 gap-y-17.5 px-5 flex flex-col bg-white text-black max-md:order-last md:pr-8 lg:pr-16 xl:pr-32 row-span-2">
            <div className="bg-rose rounded-md col-span-full p-5 flex flex-col gap-y-2.5">
                <h2 className="font-semibold">{temperature.temp}{temperature.metric === "CELCIUS" ? "°" : "°F"}</h2>
                <h6 className="font-semibold">{weatherInfo[0].title}</h6>
                <p>{weatherInfo[0].description}</p>
            </div>
        </section>
    );
}