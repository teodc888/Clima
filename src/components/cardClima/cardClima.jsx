import "./cardClima.css"
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { WiHumidity } from 'weather-icons-react';
import { WiStrongWind } from 'weather-icons-react';
import { WiCloud } from 'weather-icons-react';





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
    }else if(props.weather === "Dust"){
      return "Polvo"
    }else if(props.weather === "Fog"){
      return "Niebla"
    }
  }

  function imagenFondo (){
    if(props.weather === "Clouds"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/b9894454827733.596dc6164e918.gif"})`
    }else if(props.weather === "Clear"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/3ad89154827733.596dc6164dbd1.gif"})`
    }else if(props.weather === "Rain"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/bee3d654827733.596dc6164dec2.gif"})`
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
    }else if(props.weather === "Dust"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/7100a454827733.596dc61650827.gif"})`
    }else if(props.weather === "Fog"){
      return `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/disp/7100a454827733.596dc61650827.gif"})`
    }
  }

  //bgcolor:"#bbdefb"
  return (
    <Card sx={{ height: "100%", width: "100%", backgroundImage: imagenFondo(), color:"white", borderRadius:"30px", margin:"auto"}}>
      <CardActions >
        <Button variant="contained" color="error" sx={{borderRadius:"30px"}} onClick={props.onClose}>
          X
        </Button>
      </CardActions>
      <Link to={`/ciudad/${props.id}`}>
      <img alt="j" className="hola" src={ `http://openweathermap.org/img/wn/${props.img}@2x.png` } />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h1" component="div" sx={{fontSize:"91px"}}>
          {props.temp}°
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {españolWeather()}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          max: {props.max}° / min: {props.min}°
        </Typography>
      </CardContent>
      <CardContent sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", border:"solid", borderRadius:"30px", marginTop:"36.5%"}}>
        <Typography gutterBottom variant="h6" component="div">
          <p>{props.air}</p>
        <WiStrongWind size={25}/>
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{marginLeft:"50px"}}>
          <p>{props.clouds}</p>
        <WiCloud size={25}/> 
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{marginLeft:"50px"}}>
        <p> {props.humidity}</p>
        <WiHumidity size={25}/>
        </Typography>
      </CardContent>
    </Card>

  );
}
