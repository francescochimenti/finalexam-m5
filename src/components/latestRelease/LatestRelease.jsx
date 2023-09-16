import { Col, Container, Row } from "react-bootstrap";
import "../latestRelease/latestRelease.css";
import { useSelector } from "react-redux";
import SingleBook from "../singleBook/SingleBook";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Pagination from "@mui/material/Pagination";

function LatestRelease() {
  const books = useSelector((state) => state.books.displayAllBooks);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

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
            <div style={{ width: '80%', margin: '0 auto' }}>
              <Skeleton variant="rectangular" height={250} />
              <Skeleton variant="text" style={{ marginTop: '10px' }} />
              <Skeleton variant="text" width="80%" style={{ marginTop: '10px' }} />
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
                {currentBooks.map((book) => (
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
              <div className="d-flex justify-content-center mt-4">
                <Pagination
                  count={Math.ceil(books.length / booksPerPage)}
                  page={currentPage}
                  onChange={handlePaginationChange}
                />
              </div>
            </Col>
            <Col lg={4} m-0 p-0>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam asperiores pariatur iure aspernatur vel neque, minus, nisi officiis accusantium laborum aperiam officia consequuntur ducimus dolor quia minima labore expedita et nobis perspiciatis. Officia fuga ratione vero animi quia et voluptate vitae nesciunt, eveniet modi earum magnam facere ducimus expedita repudiandae?
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
            <Col lg={8}>
              <Row>
                {renderSkeletons()}
              </Row>
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
