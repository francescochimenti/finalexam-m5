import React, { useEffect } from "react";
import { Box, Grid, Typography, Rating, Paper } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import CommentArea from "../commentArea/CommentArea"
import { setId } from "../../reducers/idTaker";
import { useDispatch } from "react-redux";

function BookDetails() {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const { data } = useFetch(`https://epibooks.onrender.com/${bookId}`); // if the url change, useFetch will get the new data

  useEffect(() => {
    //set the id of the book in the state so i can show the comment
    dispatch(setId(bookId));
  }
    , [bookId, dispatch]);

  return (
    <>
      <Box py={5} display="flex" justifyContent="center">
        <Paper
          elevation={3}
          style={{ width: "90%", maxWidth: "1200px", padding: "24px" }}
        >
          {data ? (
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box mb={3} borderRadius="8px" overflow="hidden">
                  <img
                    src={data[0].img}
                    alt={data[0].title}
                    style={{
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Grid container spacing={2}>
                  {[...Array(3)].map((_, index) => (
                    <Grid item xs={4} key={index}>
                      <img
                        src={data[0].img}
                        alt={`${data[0].title}-${index}`}
                        style={{
                          width: "100%",
                          opacity: "0.6",
                          borderRadius: "8px",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  {data[0].title}
                </Typography>
                <Box my={2} display="flex" alignItems="center">
                  <Rating name="rating" value={4.5} readOnly />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginLeft: "8px" }}
                  >
                    154 orders
                  </Typography>
                </Box>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  ${data[0].price}
                </Typography>
                <Typography paragraph>
                  Category: <strong>{data[0].category}</strong>
                </Typography>
                <Typography paragraph>
                  This book captures the essence of the human spirit, its
                  challenges, and its triumphs.
                </Typography>
                <CommentArea/>
              </Grid>
            </Grid>
          ) : (
            <Typography variant="h4" align="center">
              Loading...
            </Typography>
          )}
        </Paper>
      </Box>
    </>
  );
}

export default BookDetails;
