import { Box, MenuItem } from "@mui/material";
import React from "react";

import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//heart (add to fovarite)
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
// card header
// card media
//card content
//card actions
//card collapse

export default function Posts() {
  //icon menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
  //boxes array
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
    <Box sx={{ flexGrow: "3" }}>
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
                <IconButton onClick={handleClick} aria-label="settings">
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
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Box sx={{ flexGrow: "1" }}/>
              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
            </CardActions>

            {renderMenu}
          </Card>
        );
      })}
    </Box>
  );
}
