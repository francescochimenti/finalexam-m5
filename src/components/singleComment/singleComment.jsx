import React, { useState, useEffect } from "react";
import {Typography ,Card ,CardContent ,Avatar ,Button ,TextField} from "@mui/material";
import BeatLoader from "react-spinners/BeatLoader";
import useComment from "../../hooks/useComment";
import DeleteComment from "../deleteComment/DeleteComment";
import axios from "axios";
import { setId } from "../../reducers/idTaker";
import { useDispatch, useSelector } from "react-redux";

function SingleComment() {
  const dispatch = useDispatch();
  const { data } = useComment();
  const [comments, setComments] = useState([]);

  const currentId = useSelector((state) => state.idTaker.id);

  useEffect(() => {
    setComments(data || []);
  }, [data]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [comments]);

  //create a state for the comment data
  const [editComment, setEditComment] = useState({
    id: "",
    text: "",
    rate: "",
  });

  const updateComment = async () => {
    if (!editComment.id) return; // just for be sure there's no error
    try {
      await axios.put(
        `https://striveschool-api.herokuapp.com/api/comments/${editComment.id}`,
        {
          comment: editComment.text,
          rate: editComment.rate,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExY2ZlN2IyYjJhZTAwMTRiMzQ3MDUiLCJpYXQiOjE2OTU2NjYxNTEsImV4cCI6MTY5Njg3NTc1MX0.y5zScLJr8heKFZpCzn0OB8IJWTE8spbQY-InnwUnM64",
          },
        }
      );
      //clear a state for the comment data, just for be sure
      setEditComment({ id: "", text: "", rate: "" });
      dispatch(setId(""));

      setTimeout(() => {
        dispatch(setId(currentId));
      }, 200);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center mt-4">
          <BeatLoader color="red" size={15} />
        </div>
      ) : (
        comments.map((comment) => (
          <Card key={comment._id} style={{ margin: "20px 0" }}>
            <CardContent>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={`https://picsum.photos/200/200?random=${currentId}`}
                  style={{ marginRight: "16px" }}
                />
                <div style={{ flexGrow: 1 }}>
                  {/* With this i easy know when someone click on the edit button, then i show the edit comment section */}
                  {editComment.id === comment._id ? (
                    <>
                      <TextField
                        value={editComment.text}
                        onChange={(e) =>
                          setEditComment({
                            ...editComment,
                            text: e.target.value,
                          })
                        }
                      />
                      <TextField
                        type="number"
                        value={editComment.rate}
                        onChange={(e) =>
                          setEditComment({
                            ...editComment,
                            rate: e.target.value,
                          })
                        }
                        inputProps={{ min: 1, max: 5 }}
                      />

                      <Button onClick={updateComment}>Save</Button>
                    </>
                  ) : (
                    <>
                      <Typography variant="body1">
                        <span className="fw-bold">Comment:</span>{" "}
                        {comment.comment}
                      </Typography>
                      <Typography variant="body2">
                        <span className="fw-bold">Rate:</span> {comment.rate}
                      </Typography>
                      <DeleteComment id={comment._id} />
                      {/* i pass the data to the edit section, so it's easy take the data of the comment */}
                        <Button
                        onClick={() =>
                          setEditComment({
                            id: comment._id,
                            text: comment.comment,
                            rate: comment.rate,
                          })
                        }
                      >
                        Edit
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
}

export default SingleComment;
