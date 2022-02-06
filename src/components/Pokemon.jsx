import axios from "axios";
import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { grey, blue } from "@mui/material/colors";
import { styled } from '@mui/material/styles';
import { IconButton } from "@mui/material";
import { CardActions } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Pokemon = (props) => {
  const { urlOne } = props;

  const [onePokemon, setOnePokemon] = useState({});
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getPokemon = async (url) => {
    await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setOnePokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemon(urlOne);
  }, []);

  if (onePokemon.sprites === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        width='200px'
        image={onePokemon.sprites.front_default}
        alt="Paella dish"
        sx={{
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png)",
        }}
      />
      <CardContent sx={{ background: grey[900] }}>
        <Typography
          variant="h5"
         
          color="text.prymary"
          sx={{
            textAlign: "center",
            background: grey[900],
            fontWeight: 600,
            textTransform: "uppercase",
            color: blue[200],
            margin: 0,
          }}
        >
          {onePokemon.name}
        </Typography>
        <CardActions disableSpacing>
        <Typography variant="body1" color="white">Detalles</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          
          <ExpandMoreIcon sx={{color:'white'}} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5"sx={{color:'white'}}>Abilities</Typography>
           {
             onePokemon.abilities.map((item,i)=>(
             <Typography key={i}variant="body2" sx={{color:blue[400], textTransform:'uppercase'}}>{item.ability.name}</Typography>
             ))
           }
          <Typography variant="h5" sx={{color:'white'}}>
           Types
          </Typography>
          {
             onePokemon.types.map((item,i)=>(
             <Typography key={i}variant="body2" sx={{color:blue[400], textTransform:'uppercase'}}>{item.type.name}</Typography>
             ))
           }
          
  
        </CardContent>
      </Collapse>
      </CardContent>
    </Card>
  );
};

export default Pokemon;
