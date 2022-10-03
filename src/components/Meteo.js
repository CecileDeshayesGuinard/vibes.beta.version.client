import React, { useEffect, useState } from "react";
import axios from "axios";

const APIKEY = "fb586994be31defa233f8923241e7174"; // a mettre niveau serveur pour la cacher

function Meteo(props) {
  const [icon, setIcon] = useState('');


  useEffect (() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${APIKEY}`
      )
      .then((response) => {
        console.log("resp", response);

        setIcon(response.data.weather[0].icon);
      })
      .catch((err) => console.log("error for meteo", err));
  }, [])

  return (
    <div>
      <img
        alt="temps actuel"
        src={`https://openweathermap.org/img/w/${icon}.png`}
      />
    </div>
  );
}

export default Meteo;







/*function Meteo (props) {

  const [data, setData] = useState('')


  useEffect (() => {
    
    const fetchData = async () => {
      const result = await axios.get (
        `http://dataservice.accuweather.com/locations/v1/cities/${props.country}/search?apikey=${APIKEY}&q=${props.city}&language=${props.language}`
      );
      const key = setData (result.data.key);
      console.log ('weather datas updated');
    };
    fetchData();
  }, [])

  console.log(data);

  return (
    <div>
      <p>
        A <strong>{props.city}</strong> actuellement, il fait :
        <img src={`http://dataservice.accuweather.com/alarms/v1/5day/${key}?apikey=${APIKEY}`}  alt="actual weather"/>
      </p>
    </div>
  )

}

export default Meteo;*/