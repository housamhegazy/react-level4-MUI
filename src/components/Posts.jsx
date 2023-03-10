import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// card header
// card media
//card content
//card actions
//card collapse

export default function Posts() {
  const myCards = [
    {
      letter: "A",
      color: purple[500],
      title: "ahmed ",
      subheader: "September 14, 2016",
      cardImage:
        "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600",
      cardinfo:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along withthe mussels, if you like.",
    },
    {
      letter: "H",
      color: "red",
      title: "HOUSAM  ",
      subheader: "September 14, 2016",
      cardImage:
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
      cardinfo:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along withthe mussels, if you like.",
    },
    {
      letter: "M",
      color: "grey",
      title: "MAHMOUD ",
      subheader: "September 14, 2016",
      cardImage:
        "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600",
      cardinfo:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along withthe mussels, if you like.",
    },
    {
      letter: "A",
      color: purple[500],
      title: "hegazy ",
      subheader: "September 14, 2016",
      cardImage:
        "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600",
      cardinfo:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along withthe mussels, if you like.",
    },
  ];
  return (
    <Box sx={{ flexGrow: "2" }}>
      {myCards.map((card) => {
        return (
          <Card key={card.title} sx={{ maxWidth: 345, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: card.color }} aria-label="recipe">
                  {card.letter}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.title}
              subheader={card.subtitle}
            />
            <CardMedia
              component="img"
              height="194"
              image={card.cardImage}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.cardinfo}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}
