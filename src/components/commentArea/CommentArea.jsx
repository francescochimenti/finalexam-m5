import React from "react";
import SingleComment from "../singleComment/singleComment";
import AddComment from "../addComment/AddComment";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";

function CommentArea() {
  const currentID = useSelector((state) => state.idTaker.id);

  if (currentID) {
    return (
      <Box component="div">
        <AddComment />
        <SingleComment />
      </Box>
    );
  } else {
    return (
      <Typography
        variant="h5"
        sx={{
          marginTop: "50vh",
          textAlign: "center",
        }}
      >
        Click a book to show the comments.
      </Typography>
    );
  }
}

export default CommentArea;
