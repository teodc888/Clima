import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Clima from "./components/clima/clima";
import Ciudad from "./components/ciudad/ciudad";
import About from "./components/about/about";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState([]);

  const ciudadEncontrada = () => {
    toast.success('Ciudad agregada con exito', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
  }
  const errorCiudad = () => {
    toast.error('Ciudad No encontrada', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  const ciudadRemovida = () => {
    toast.error('Se elimino con exito', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
    ciudadRemovida();
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            air: recurso.wind.speed,
            humidity: recurso.main.humidity,
            visibility: recurso.visibility,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
          ciudadEncontrada()
        } else {
          errorCiudad()
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  console.log(cities);
  return (
    <div>
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Clima cities={cities} onClose={onClose} />} />
        <Route
          path="/ciudad/:ciudadId"
          element={<Ciudad onFilter={onFilter} />}
        />
        <Route path="/about" element={<About setCities={setCities} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
