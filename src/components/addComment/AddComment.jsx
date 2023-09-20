import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setId} from "../../reducers/idTaker";

function AddComment() {

  const dispatch = useDispatch();

  const currentId = useSelector((state) => state.idTaker.id);

  const [rate, setRate] = useState("");
  const [comment, setComment] = useState("");
  
  const URL = `https://striveschool-api.herokuapp.com/api/comments/`;
  const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZiOTgyYzMyYWYyNzAwMTQ5ODYxMTQiLCJpYXQiOjE2OTQyMTAwOTIsImV4cCI6MTY5NTQxOTY5Mn0.FiyvuJpyWQ2fPmBNRuOZwJW73vb7Pa3PASf3iDOiiVo";
  
  const postComment = async () => {
    try {
      const response = await axios.post(
        URL
        ,
        {
          comment: comment,
          rate: rate,
          elementId: currentId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: TOKEN,
          },
        }
        );
        console.log(response);
        
        if(response.status === 200) {
          alert("Commento aggiunto correttamente")
          setComment("")
          setRate("")
          dispatch(setId(""))
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        marginBottom: "20px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: "20px" }}>
        <InputLabel>Voto</InputLabel>
        <Select
          onChange={(e) => setRate(e.target.value.toString())}
          value={rate}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <MenuItem value={num}
            >
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Commento"
        variant="outlined"
        multiline
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        sx={{ marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary"
        onClick={() => {
          if (rate && comment !== "") {
        postComment()
      } else {
        alert("Inserisci un commento e un voto")
          }
        }}
      >
        Aggiungi Commento
      </Button>
    </Box>
  );
}

export default AddComment;
