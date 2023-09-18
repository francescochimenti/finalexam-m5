import { Typography, Card, CardContent, Avatar } from "@mui/material";
import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SingleComment() {

  const currentID = useSelector((state) => state.idTaker.id);
  
  const URL = `https://striveschool-api.herokuapp.com/api/comments/${currentID}`;
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZiOTgyYzMyYWYyNzAwMTQ5ODYxMTQiLCJpYXQiOjE2OTQyMTAwOTIsImV4cCI6MTY5NTQxOTY5Mn0.FiyvuJpyWQ2fPmBNRuOZwJW73vb7Pa3PASf3iDOiiVo";
  
  const [comments, setComments] = useState([]);

  const getComment = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: TOKEN,
        },
      });
      setComments(response.data);
  console.log(comments);


    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    setComments([]);

    getComment();
}, [currentID]);


return (
  <>
    {comments.length === 0 ? (
       <Typography variant="h5" style={{ color: '#888' }}>
       Nessun commento
     </Typography>
    ) : (
      comments.map((comment) => (
        <Card
          key={nanoid()}
          variant="elevation"
          style={{
            marginBottom: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "10px 20px" }}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Voto: {comment.rate} / 5
            </Typography>
          </div>

          <CardContent
            style={{ display: "flex", alignItems: "start", padding: "20px" }}
          >
            <Avatar
              src={`https://i.pravatar.cc/150?img=${
                Math.floor(Math.random() * 50)}
              `}
              style={{ width: "60px", height: "60px", marginRight: "20px" }}
            />

            <div style={{ flexGrow: 1 }}>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                style={{ marginBottom: "8px" }}
              >
                Commento:
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {comment.comment}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {comment.author}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))
    )}
  </>
);

}

export default SingleComment;
