import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { useParams } from "react-router-dom";
import TempDia from "../tempDia/tempDia";
import { Icon, Typography } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
export default function Ciudad({ onFilter }) {
  const { ciudadId } = useParams();
  const ciudad = onFilter(ciudadId);
  const [ciudadData, setCiudadData] = useState("");
  useEffect(() => {
    if (ciudad !== undefined) {
      setTimeout(()=>{
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad.name}&appid=${apiKey}&units=metric`
          )
          .then((data) => {
            setCiudadData(data.data);
          })
          .catch((err) => console.error(err));

      }, 1500)
    }
  }, []);

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = hour + ":" + min + ":" + sec;
    return time;
  }

  console.log(ciudadData);
  return (
    <>
      {ciudadData !== "" ? (
        <>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Card
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ bgcolor: "white", marginTop: "20px" }}
            >
              <Typography gutterBottom variant="h1" textAlign="center" component="div">
                {ciudadData.city.name}
              </Typography>
              <Typography gutterBottom variant="h5"  textAlign="center" component="div">
                <WbSunnyIcon /> Amanecer {timeConverter(ciudadData.city.sunrise)}
              </Typography>
              <Typography gutterBottom variant="h5" textAlign="center" component="div">
               <Brightness2Icon />  Atardecer {timeConverter(ciudadData.city.sunset)}
              </Typography>
            </Card>
            {ciudadData.list.map((ciu) => {
              return (
                <TempDia
                  key={ciu.dt}
                  dt_txt={ciu.dt_txt}
                  img={ciu.weather[0].icon}
                  max={ciu.main.temp_max}
                  min={ciu.main.temp_min}
                  weather={ciu.weather[0].main}
                />
              );
            })}
          </Stack>
        </>
      ) : (
        <div align="center">
          <img alt="j" src="https://media3.giphy.com/media/oBu7EkGffhCWaFTfJH/giphy.gif?cid=ecf05e47msv7p5f876uwxylwtp5au3drh7caa2hfiejfcp8h&rid=giphy.gif&ct=s" />

        </div>
      )}
    </>
  );
}
