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

export interface ActivitiesResponse {
  activities: [
    {
      title: string;
      shortDescription: string;
      description: string;
      minTemp: number;
      maxTemp: number;
      id: string;
      images: string[];
      mainImageUrl: string;
    }
  ];
}

export interface ForecastResponse {
  forecast: [
    {
      date: string;
      condition: {
        description: string;
        icon:
          | "overcast"
          | "light-rain"
          | "cloudy"
          | "partly-cloudy"
          | "hail"
          | "heavy-rain"
          | "thunderstorm"
          | "snow"
          | "heavy-snow"
          | "fog"
          | "sunny"
          | "clear";
      };
      minTemp: number;
      maxTemp: number;
      metric: "CELCIUS" | "FAHRENHEIT";
      windDirection: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
      precipitation: number;
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

export async function getActivities(): Promise<ActivitiesResponse> {
  const res = await fetch(`${BASE_URL}/get-things-to-do`);

  if (!res.ok) {
    throw new Error("Failed to fetch activities");
  }
  return await res.json();
}

export async function getForecast(): Promise<ForecastResponse> {
  const res = await fetch(`${BASE_URL}/get-forecast`);

  if (!res.ok) {
    throw new Error("Failed to fetch forecast");
  }
  return await res.json();
}
