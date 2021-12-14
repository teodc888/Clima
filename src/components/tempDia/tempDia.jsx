import React from "react";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function TempDia(props) {
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const numeroDia = new Date(props.dt_txt).getDay();
  const nombreDia = dias[numeroDia];

  function españolWeather() {
    if (props.weather === "Clouds") {
      return "Nubes";
    } else if (props.weather === "Clear") {
      return "Despejado";
    } else if (props.weather === "Rain") {
      return "Lluvia";
    } else if (props.weather === "Snow") {
      return "Nieve";
    } else if (props.weather === "Drizzle") {
      return "Llovizna";
    } else if (props.weather === "Thunderstorm") {
      return "Tormenta";
    } else if (props.weather === "Mist") {
      return "Niebla";
    } else if (props.weather === "Haze") {
      return "Neblina";
    }
  }

  function dia(){
    if(nombreDia === "lunes"){
      return "#e3f2fd"
    }else if(nombreDia === "martes"){
      return "#bbdefb"
    }else if(nombreDia === "miércoles"){
      return "#90caf9"
    }else if(nombreDia === "jueves"){
      return "#64b5f6"
    }else if(nombreDia === "viernes"){
      return "#42a5f5"
    }else if(nombreDia === "sábado"){
      return "#2196f3"
    }else if(nombreDia === "domingo"){
      return "#1e88e5"
    }
  }
  return (
    <>
      <Card key={props.id} sx={{ height: 100, width: 900, bgcolor: dia() }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={3.2}>
            <Typography gutterBottom variant="h4" component="div">
              {nombreDia} 
            </Typography>
          </Grid>
          <Grid item xs={3.2}>
            <Typography gutterBottom variant="h5" component="div">
             {props.dt_txt}
            </Typography>
          </Grid>
          <Grid item xs={3.2}>
            <img
              alt="j"
              className="hola"
              src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            />
          </Grid>
          <Grid item xs={3.2}>
            <Typography gutterBottom variant="h6" component="div">
              max: {props.max} / min: {props.min}
            </Typography>
          </Grid>
          <Grid item xs={3.2}>
            <Typography gutterBottom variant="h6" component="div">
              {españolWeather()}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
