import { Col, Container, Row } from "react-bootstrap";
import "../latestRelease/latestRelease.css";
import { useDispatch, useSelector } from "react-redux";
import SingleBook from "../singleBook/SingleBook";
import { useEffect, useState } from "react";
import CommentArea from "../commentArea/CommentArea";
import { BarLoader } from "react-spinners";
import { setId } from "../../reducers/idTaker";

function LatestRelease() {
  const books = useSelector((state) => state.books.displayAllBooks.slice(0,16));
  const [loading, setLoading] = useState(false);

  const currentId = useSelector((state) => state.idTaker.id);

  const dispatch = useDispatch();
  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, []);


  if (!loading) {
    return (
      <>
        <Container>
          <h1 className="display-1 text-center mt-4 fw-bold">epibooks</h1>
          <Row className="h-100">
            <Col lg={8}>
              <Row>
                {books.map((book) => (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    key={book.asin}
                    className={`d-flex px-2 py-0 justify-content-center mt-4 ${
                      book.asin === currentId ? "selected-book" : ""
                    }`}
                    onClick={() => {
                      if (currentId === book.asin) {
                        dispatch(setId(null));
                      } else {
                        dispatch(setId(book.asin));
                      }
                    }}
                  >
                    <SingleBook book={book} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={4}>
    <div className="comment-sticky-top">
        <CommentArea />
    </div>
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
            <Col className="d-flex justify-content-center align-items-center">
              <Row>
              <BarLoader color="#ff0000" />
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default LatestRelease;
