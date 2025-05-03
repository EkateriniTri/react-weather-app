import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const apiKey = "1d944035ba394b525bb5458d085c94ed";
    const { lon, lat } = props.coordinates;
    if (!props.coordinates) {
      return null;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      console.log("API response:", response.data);
      setForecast(response.data);
    });
  }, [props.coordinates]);

  if (!forecast) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
