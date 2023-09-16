import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";


const SingleBook = ({ book }) => {
  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 500 }}
            image={book.img}
            alt={book.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/details/${book.asin}`}>
            <Button size="medium" color="primary">
              Dettagli
          </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default SingleBook;
