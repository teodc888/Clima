import "./cardClima.css"
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';


export default function CardClima(props) {
  return (
    <Card sx={{ height: 500, width: 400 }}>
      <CardActions sx={{ ml: 40,  }}>
        <Button variant="outlined" color="error" onClick={props.onClose}>
          X
        </Button>
      </CardActions>
      <img  className="hola" src={ `http://openweathermap.org/img/wn/${props.img}@2x.png` } />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          {props.temp} °C
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          max: {props.max} / min: {props.min}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <AirIcon/> {props.air}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <CloudIcon/> {props.humidity}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <AirportShuttleIcon/> {props.visibility}
        </Typography>
      </CardContent>
    </Card>
  );
}
