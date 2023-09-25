import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setId } from "../../reducers/idTaker";



const DeleteComment = ({ id }) => {

  const dispatch = useDispatch()

  const currentId = useSelector((state) => state.idTaker.id);


  const URL = `https://striveschool-api.herokuapp.com/api/comments/`;
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExY2ZlN2IyYjJhZTAwMTRiMzQ3MDUiLCJpYXQiOjE2OTU2NjYxNTEsImV4cCI6MTY5Njg3NTc1MX0.y5zScLJr8heKFZpCzn0OB8IJWTE8spbQY-InnwUnM64";
  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(URL + id, {
        headers: {
          Authorization: TOKEN,
        },
      });

      if (response.status === 200) {
        dispatch(setId(""));
        setTimeout(() => {
          dispatch(setId(currentId));
        }, 100);
      } else {
        alert("Errore durante l'eliminazione del commento.");
      }
    } catch (error) {
      console.log("Errore durante l'eliminazione del commento:", error);
    }
  };
  return (
    <IconButton aria-label="delete"
    onClick={() => handleDelete(id)}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteComment;
