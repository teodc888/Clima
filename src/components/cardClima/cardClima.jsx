import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardClima(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActions>
        <Button>X</Button>
      </CardActions>
      <CardMedia
        component="img"
        alt="green iguana"
        height="50"
        image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cordoba
        </Typography>
        <Typography>
            MIN 20 | MAX 30
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
    </Card>
  );
}