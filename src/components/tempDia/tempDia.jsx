import React from "react";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function TempDia(props) {
  const dias = [
    "DOMINGO",
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO",
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

  return (
    <>
      <Card key={props.id} sx={{ height: 100, width: 900, bgcolor: "#01579b",  borderRadius: "5px", color:"white" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={3.2}>
            <Typography gutterBottom variant="h5" component="div" sx={{marginLeft:"15px"}}>
              {nombreDia} 
            </Typography>
          </Grid>
          <Grid item xs={3.2}>
            <Typography gutterBottom variant="h5" component="div" sx={{marginLeft:"40px"}}>
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
            <Typography gutterBottom variant="h6" component="div" sx={{marginRight:"50px"}}>
              max: {props.max}° min: {props.min}°
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
