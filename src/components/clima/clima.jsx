import React from "react";
import CardClima from "../cardClima/cardClima";
import Grid from "@mui/material/Grid";
export default function Clima({ cities, onClose }) {

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cities.map((c) => {
          return (
            <Grid item xs={2} sm={3} md={3} key={c.id}>
              <CardClima
                key={c.id}
                id={c.id}
                max={c.max}
                min={c.min}
                name={c.name}
                img={c.img}
                temp={c.temp}
                humidity={c.humidity}
                air={c.air}
                visibility={c.visibility}
                clouds={c.clouds}
                weather={c.weather}
                onClose={() => onClose(c.id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
