import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

function MyFooter() {
  return (
      <Box mt={5} mb={2}>
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        Book's Shop
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Discover the world of books with us.
      </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="#">
            Book's Shop
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
    </Container>
      </Box>
  );
}

export default MyFooter;
