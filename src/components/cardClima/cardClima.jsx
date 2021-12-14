import "./cardClima.css"
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import { Link } from "react-router-dom";




export default function CardClima(props) {
  function españolWeather(){
    if(props.weather === "Clouds"){
      return "Nubes"
    }else if(props.weather === "Clear"){
      return "Despejado"
    }else if(props.weather === "Rain"){
      return "Lluvia"
    }else if(props.weather === "Snow"){
      return "Nieve"
    }else if(props.weather === "Drizzle"){
      return "Llovizna"
    }else if(props.weather === "Thunderstorm"){
      return "Tormenta"
    }else if(props.weather === "Mist"){
      return "Niebla"
    }else if(props.weather === "Haze"){
      return "Neblina"
    }
  }

  function imagenFondo (){
    if(props.weather === "Clouds"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/b9894454827733.596dc6164e918.gif"})`
    }else if(props.weather === "Clear"){
      return `url(${"https://i.pinimg.com/originals/04/6f/51/046f5145ae962d44679c45198909043a.gif"})`
    }else if(props.weather === "Rain"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/d8b05154827733.596dc77a0361f.gif"})`
    }else if(props.weather === "Snow"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/617cfc54827733.596dc6164f4f4.gif"})`
    }else if(props.weather === "Drizzle"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/14842d54827733.596dc6164f832.gif"})`
    }else if(props.weather === "Thunderstorm"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/d8b05154827733.596dc77a0361f.gif"})`
    }else if(props.weather === "Mist"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/7100a454827733.596dc61650827.gif"})`
    }else if(props.weather === "Haze"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/7100a454827733.596dc61650827.gif"})`
    }
  }

  //bgcolor:"#bbdefb"
  return (
    <Card sx={{ height: 650, width: 390,marginLeft:"20px", marginTop:"20px", backgroundImage: imagenFondo(), color:"white", borderRadius:"30px"}}>
      <CardActions sx={{ ml: 39,  }}>
        <Button variant="outlined" color="error" sx={{borderRadius:"30px"}} onClick={props.onClose}>
          X
        </Button>
      </CardActions>
      <Link to={`/ciudad/${props.id}`}>
      <img  className="hola" src={ `http://openweathermap.org/img/wn/${props.img}@2x.png` } />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {props.temp} °C
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {españolWeather()}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          max: {props.max} / min: {props.min}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        <AirIcon/> {props.air}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        <CloudIcon/> {props.clouds}
        </Typography>
        {/* <Typography gutterBottom variant="h6" component="div">
        <AirportShuttleIcon/> {props.visibility}
        </Typography> */}
      </CardContent>
    </Card>

  );
}
