import React, { useState, useEffect } from "react";
import sunimg from "./images/sunimg.png";
import moonimg from "./images/moonimg.jpg";
import thermo from "./images/thermo.png";

export default function Weather(props) {
  const [weatherdata, setweatherdata] = useState([]);

  const updateweather = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setweatherdata(parsedData.main);
  };

  useEffect(() => {
    updateweather();
  }, []);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


let current = new Date();

  let day = weekday[current.getDay()];
  let newdate = current.getDate();
  let newmonth = monthlist[current.getMonth()];

  let hrs = current.getHours();
  let minutes = current.getMinutes();

  return (
    <>
      <div className="weather">
        <div className="thermo">
          <img src={thermo} alt="" style={{ height: "50px", marginRight:"17px" }} />
        </div>
        <div className="weatherinfo">
          <h4>New Delhi</h4>
          <h3>{weatherdata.temp}℃</h3>
          <span>
            {hrs}:{minutes}
          </span>
          <h4>
            {day}, {newdate} {newmonth}{" "}
          </h4>
        </div>
      </div>
      ;
    </>
  );
}
