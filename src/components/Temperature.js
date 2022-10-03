import React, { useState, useEffect } from "react";
import axios from "axios";

const APIKEY = "fb586994be31defa233f8923241e7174";

function Temperature(props) {
  const [temp, setTemp] = useState();
  const celcius = 273.15;


  useEffect (() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${APIKEY}`
      )
      .then((response) => {
        console.log("resp", response);
        setTemp(response.data.main.temp);
      })
      .catch((err) => console.log("error for temp", err));
  }, [])

  let celciusTemp = Math.round(temp - celcius).toFixed(1)

  return (
    <div>
      <p>
        {celciusTemp}
      </p>
    </div>
  );
}

export default Temperature;