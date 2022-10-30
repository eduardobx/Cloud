import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
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
  let linkFund = "";

  // switch (fundTime) {
  //   case "01d":
  //     linkFund =
  //       "https://images.pexels.com/photos/4671463/pexels-photo-4671463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  //     break;
  //   case "01n":
  //     linkFund =
  //       "https://images.pexels.com/photos/13891178/pexels-photo-13891178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  //     break;
  //   case "02d":
  //     linkFund =
  //       "https://images.pexels.com/photos/5069533/pexels-photo-5069533.jpeg?auto=compress&cs=tinysrgb&w=800";
  //     break;
  //   case "02n":
  //     linkFund =
  //       "https://images.pexels.com/photos/13511276/pexels-photo-13511276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  //     break;
  //   case "04n":
  //     linkFund =
  //       "https://images.pexels.com/photos/12262726/pexels-photo-12262726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  //     break;
  //   case "03n":
  //     linkFund =
  //       "https://images.pexels.com/photos/12903460/pexels-photo-12903460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  //     break;
  //   case "03d":
  //     linkFund =
  //       "https://images.pexels.com/photos/11513041/pexels-photo-11513041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  //     break;
  //   case "04d":
  //     linkFund =
  //       "https://images.pexels.com/photos/12907149/pexels-photo-12907149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  //     break;
  //   case "09d":
  //     linkFund =
  //       "https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=800";
  //     break;
  //   case "09n":
  //     linkFund =
  //       "https://images.pexels.com/photos/2618980/pexels-photo-2618980.jpeg?auto=compress&cs=tinysrgb&w=800";
  //     break;
  //   case "10d":
  //     linkFund =
  //       "https://images.pexels.com/photos/1755702/pexels-photo-1755702.jpeg?auto=compress&cs=tinysrgb&w=800";
  //     break;
  //   case "10n":
  //     linkFund =
  //       "https://images.pexels.com/photos/11408850/pexels-photo-11408850.jpeg?auto=compress&cs=tinysrgb&w=800";
  //     break;
  //   case "11d":
  //     linkFund =
  //       "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=800";
  //     break;
  //   case "11n":
  //     linkFund =
  //       "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800";
  //     break;
  //   case "13d":
  //     linkFund =
  //       "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800";
  //     break;
  //   case "13n":
  //     linkFund =
  //       "https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=800";
  //     break;
  //   case "50d":
  //     linkFund =
  //       "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  //     break;
  //   case "50n":
  //     linkFund =
  //       "https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  //     break;
  //     default:
  //     linkFund =
  //       "https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  // }
  for (let i = 10; i <= 100; i += 10) {
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 10) {
      linkFund = img.img1;
    }
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 20) {
      linkFund = img.img2;
    }
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 30) {
      linkFund = img.img3;
    }
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 40) {
      linkFund = img.img4;
    }
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 50) {
      linkFund = img.img5;
    }
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 60) {
      linkFund = img.img6;
    }
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 70) {
      linkFund = img.img7;
    }
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 80) {
      linkFund = img.img8;
    }
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 90) {
      linkFund = img.img9;
    }
    if (`${(time.main?.temp - 273.15).toFixed(1)}` < 100) {
      linkFund = img.img10;
    }
  }

  document.body.style = `background-image: url(${linkFund})`;

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
    </div>
  );
}

export default App;
