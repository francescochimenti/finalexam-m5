import { Typography, Card, CardContent, Avatar } from "@mui/material";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import useComment from "../../hooks/useComment";
import DeleteComment from "../deleteComment/DeleteComment";
import { useSelector } from "react-redux";

function SingleComment() {
  const { data } = useComment();


  const [comments, setComments] = useState([]);

  const currentId = useSelector((state) => state.idTaker.id);
  useEffect(() => {

    if (data) {
      setComments(data);
    } else {
      setComments([]);
    }
  }, [data, currentId]);
  
  

  return (
    <>
      {comments.length === 0 ? (
        <Typography variant="h5" sx={{ textAlign: "center" }}>
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
                src={`https://i.pravatar.cc/150?img=${Math.floor(
                  Math.random() * 50
                )}
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
                <DeleteComment id={comment._id} />
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
}

export default SingleComment;
