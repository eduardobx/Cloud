import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Clima from "./compnents/Clima";
import  img  from "./img.json";

function App() {
  const [time, setTime] = useState({});
  const [change, setChange] = useState(false);

  useEffect(() => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=04b06880e05e2e74728d0e300a48ddd3`
        )
        .then((res) => setTime(res.data));
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  console.log(time);
  const onChnge = () => {
    setChange(!change);
  };
  
  return (
    <div className="App">
      <h1>weather APP</h1>
      <p>
        <b>Ciudad: </b>
        {time.name} {time.sys?.country}
      </p>
      <div className="conteiner-time">
        <div className="conteiner-temp">
          <img
            src={`http://openweathermap.org/img/wn/${time.weather?.[0].icon}@2x.png`}
            alt=""
          />
          <p>
            <i className="fa-solid fa-temperature-quarter"></i>{" "}
            {change
              ? `${(time.main?.temp - 273.15).toFixed(1)}°c`
              : `${(((time.main?.temp - 273.15) * 9) / 5 + 32).toFixed(1)}°f`}
          </p>
        </div>

        <ul>
          <li>
            <i className="fa-solid fa-wind"></i> <strong>wind speed :</strong>{" "}
            {time.wind?.speed} m/s
          </li>
          <li>
            <i className="fa-solid fa-cloud"></i> <strong>clouds :</strong>{" "}
            {time.clouds?.all} %
          </li>
          <li>
            <i className="fa-solid fa-feather"></i> <strong>pressure :</strong>{" "}
            {time.main?.pressure} mb
          </li>
        </ul>
      </div>
      <button onClick={onChnge}>ºC/ºFh</button>
      <Clima time={`${(time.main?.temp - 273.15).toFixed(1)}`}/>
    </div>
  );
}

export default App;
