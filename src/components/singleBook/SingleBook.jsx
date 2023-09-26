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
            sx={{ height: 320}}
            image={book.img}
            alt={book.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div"
              sx
              ={{
                display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
          
              }}
            >
              {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {book.category.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {book.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/details/${book.asin}`}>
            <Button size="medium" color="primary">
              Details
          </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default SingleBook;
