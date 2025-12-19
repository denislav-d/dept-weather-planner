import { ForecastResponse } from "@/lib/api";
import { FahrenheitToCelsius, formatDate, formatWindDirection } from "@/utils/utils";
import { formatWeatherIcon } from "@/utils/weather-icon";
import Image from "next/image";
import Form from "./Form";

export default function ForecastSection({ forecast }: { forecast: ForecastResponse }) {
    return (
        <section className="col-span-full md:col-span-6 py-5 gap-y-14 grid grid-cols-6 max-md:px-5 gap-x-3 bg-secondary-100 text-black md:pl-8 lg:pl-16 xl:pl-20 2xl:pl-32 row-span-2">
            <div className="flex flex-col gap-y-6 pt-10 md:pt-24 col-span-full lg:col-span-5">
                <h4 className="font-semibold">Upcoming 5 days</h4>

                <ul className="flex flex-col gap-y-2">
                    {forecast.forecast.map((day, index) => (
                        <li key={index} className="flex flex-col xl:flex-row xl:items-center xl:grid xl:grid-cols-3 xl:border-b xl:border-b-secondary-50 xl:pb-3">
                            {day.date && <h6 className="font-semibold md:col-span-1">{formatDate(day.date)}</h6>}

                            <div className="grid grid-cols-5 md:col-span-2">
                                <span className="flex items-center gap-x-2 mr-6 col-span-2">
                                    {day.condition.icon && <span aria-label={day.condition.description}>{formatWeatherIcon(day.condition.icon)}</span>}

                                    {day.minTemp && day.maxTemp && <p className="font-medium!">{day.metric === "CELCIUS" ? day.minTemp : FahrenheitToCelsius(day.minTemp)}° / <span className="font-semibold">{day.metric === "CELCIUS" ? day.maxTemp : FahrenheitToCelsius(day.maxTemp)}°</span></p>}
                                </span>

                                <span className="flex items-center gap-x-3 col-span-2">
                                    <Image src="precipitation-icon.svg" alt="Precipitation icon" width={12} height={12} />
                                    <p className="font-medium!" >{day.precipitation}mm</p>
                                </span>

                                {day.windDirection && <span className="flex items-center col-span-1 mr-2 md:mr-4 lg:mr-2">
                                    <p className="font-medium!">{formatWindDirection(day.windDirection)}</p>
                                    <Image src="wind-icon.svg" alt="Wind direction icon" width={12} height={12} className="ml-auto" />
                                </span>
                                }
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Form />
        </section>
    );
}