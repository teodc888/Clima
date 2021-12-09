import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from '../searchBar/searchBar';


export default function NavBar({onSearch}) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ bgcolor: "#1a237e" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            DELLACQUA CLIMA
          </Typography>
          <SearchBar onSearch={onSearch} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}