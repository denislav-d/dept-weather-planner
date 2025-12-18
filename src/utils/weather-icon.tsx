import {
  WiDayCloudy,
  WiDayRain,
  WiDayHail,
  WiDayThunderstorm,
  WiDaySnow,
  WiDayFog,
  WiDaySunny,
} from "react-icons/wi";

export function formatWeatherIcon(icon: string, size: number = 24) {
  switch (icon) {
    case "overcast":
      return <WiDayCloudy size={size} />;
    case "light-rain":
      return <WiDayRain size={size} />;
    case "cloudy":
      return <WiDayCloudy size={size} />;
    case "partly-cloudy":
      return <WiDayCloudy size={size} />;
    case "hail":
      return <WiDayHail size={size} />;
    case "heavy-rain":
      return <WiDayRain size={size} />;
    case "thunderstorm":
      return <WiDayThunderstorm size={size} />;
    case "snow":
      return <WiDaySnow size={size} />;
    case "heavy-snow":
      return <WiDaySnow size={size} />;
    case "fog":
      return <WiDayFog size={size} />;
    case "sunny":
      return <WiDaySunny size={size} />;
    case "clear":
      return <WiDaySunny size={size} />;
    default:
      return <WiDaySunny size={size} />;
  }
}
