import React, { useState } from "react";
import { CardActions, Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");


  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <CardActions>
        <SearchIcon />

        <Input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
        sx={{color:"white"}}
        />
        </CardActions>
      </form>
    </div>
  );
}
