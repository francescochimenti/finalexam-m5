import { Typography, Card, CardContent, Avatar } from "@mui/material";
import useFetch from "../../hooks/useFetch";

function SingleComment() {
  const { data } = useFetch("https://striveschool-api.herokuapp.com/api/comments/");

  if (!data) return <div>Loading...</div>;

  return (
    <>
      {data.map((comment) => (
        <Card
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
              Voto: {comment.comment} / 5
            </Typography>
          </div>
  
          <CardContent
            style={{ display: "flex", alignItems: "start", padding: "20px" }}
          >
            <Avatar
              src="https://koolinus.net/blog/wp-content/uploads/2019/03/avataaars-%E2%80%93-koolinus-1-12mar2019.png"
              alt="koolinus avatar"
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
                {comment.rate}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default SingleComment;
