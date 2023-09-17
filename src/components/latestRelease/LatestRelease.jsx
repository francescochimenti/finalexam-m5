import { Col, Container, Row } from "react-bootstrap";
import "../latestRelease/latestRelease.css";
import { useSelector } from "react-redux";
import SingleBook from "../singleBook/SingleBook";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import CommentArea from "../commentArea/CommentArea";

function LatestRelease() {
  const books = useSelector((state) => state.books.displayAllBooks);
  const [loading, setLoading] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, []);

  const renderSkeletons = () => {
    return (
      <>
        {Array.from({ length: books.length }).map(() => (
          <Col
            xs={12}
            md={6}
            lg={4}
            key={nanoid()}
            className="d-flex justify-content-center mt-4"
          >
            <div style={{ width: "80%", margin: "0 auto" }}>
              <Skeleton variant="rectangular" height={250} />
              <Skeleton variant="text" style={{ marginTop: "10px" }} />
              <Skeleton
                variant="text"
                width="80%"
                style={{ marginTop: "10px" }}
              />
            </div>
          </Col>
        ))}
      </>
    );
  };

  if (!loading) {
    return (
      <>
        <Container>
          <h1 className="display-1 text-center mt-4 fw-bold">Book's Shop</h1>
          <Row>
            <Col lg={8}>
              <Row>
                {books.map((book) => (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    key={book.asin}
                    className={`d-flex justify-content-center mt-4 ${
                      book.asin === selectedBookId ? "selected-book" : ""
                    }`}
                    onClick={() => {
                      if (selectedBookId === book.asin) {
                        setSelectedBookId(null);
                      } else {
                        setSelectedBookId(book.asin);
                      }
                    }}
                    
                  >
                    <SingleBook book={book} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={4} m-0 p-0>
            <CommentArea selectedBookId={selectedBookId} />
            </Col>
          </Row>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <h1 className="display-1 text-center mt-4 fw-bold">Book's Shop</h1>
          <Row>
            <Col lg={8}>
              <Row>{renderSkeletons()}</Row>
            </Col>
            <Col lg={4} m-0 p-0>
              <div>
                <Skeleton variant="text" height={300} />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default LatestRelease;
