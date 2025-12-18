const BASE_URL = "https://dept-frontend-case.deptagency.com/api";

export interface WeatherResponse {
  temperature: {
    temp: number;
    metric: "CELCIUS" | "FAHRENHEIT";
  };
  weatherInfo: [
    {
      minTemp: number;
      maxTemp: number;
      title: string;
      description: string;
    }
  ];
}

export async function getWeather(): Promise<WeatherResponse> {
  const res = await fetch(`${BASE_URL}/get-weather`);

  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }
  return await res.json();
}
