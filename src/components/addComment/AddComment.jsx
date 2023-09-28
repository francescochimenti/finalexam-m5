import {TextField,Button,Select,MenuItem,FormControl,InputLabel,Box} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "../../reducers/idTaker";

const AddComment = () => {

  const dispatch = useDispatch();

  const currentId = useSelector((state) => state.idTaker.id);

  const [rate, setRate] = useState("");
  const [comment, setComment] = useState("");
  
  const URL = `https://striveschool-api.herokuapp.com/api/comments/`;
  const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExY2ZlN2IyYjJhZTAwMTRiMzQ3MDUiLCJpYXQiOjE2OTU2NjYxNTEsImV4cCI6MTY5Njg3NTc1MX0.y5zScLJr8heKFZpCzn0OB8IJWTE8spbQY-InnwUnM64";
  
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
        
        if (response.status === 200) {
          setComment(""); //clear the comment
          setRate(""); //clear the rate
          dispatch(setId(""));// i need this for get again the get, after the post
          setTimeout(() => {
            dispatch(setId(currentId));// now i will get the post
          }, 100);
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
        <InputLabel>Rate</InputLabel>
        <Select
          onChange={(e) => setRate(e.target.value.toString())}
          value={rate}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <MenuItem value={num} key={num}
            >
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Comment"
        variant="outlined"
        multiline
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        sx={{ marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary"
        onClick={() => {
          if (rate && comment !== "") {
            // if all the fields are filled, i can post the comment
        postComment()
      } else {
        alert("Inserisci un commento e un voto")
          }
        }}
      >
        Add Comment
      </Button>
    </Box>
  );
}

export default AddComment;
