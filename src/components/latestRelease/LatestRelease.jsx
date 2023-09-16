import { Col, Container, Row } from "react-bootstrap";
import "../latestRelease/latestRelease.css";
import { useSelector } from "react-redux";
import SingleBook from "../singleBook/SingleBook";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

function LatestRelease() {
  const books = useSelector((state) => state.books.displayAllBooks);

  const [loading, setLoading] = useState(false);

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
          <h1 className="display-1 text-center mt-4 fw-bold">Book's Shop</h1>
          <Row>
            <Col lg={8}>
              <Row>
                {books.map((book) => (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    key={nanoid()}
                    className="d-flex justify-content-center mt-4"
                  >
                    <SingleBook book={book} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={4} m-0 p-0>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  sapiente nemo labore quasi culpa veritatis autem accusamus
                  reiciendis vitae unde qui consequatur adipisci minima magnam
                  fugiat perferendis neque eaque temporibus.
                </p>
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
            <Col className="d-flex justify-content-center align-content-center w-100 mt-5">
            <BeatLoader color="#ff9100"/>
            
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default LatestRelease;
