import { Container, Row, Col, Image } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import React from 'react';
function BookDetails() {

    const { bookId } = useParams();

    const { data } = useFetch(`https://epibooks.onrender.com/${bookId}`)
    
    return (
    <>
            {data && (<section className="py-5">
            <Container>
                <Row className="gx-5">
                    <Col lg={6}>
                        <div className="rounded-4 mb-3 d-flex justify-content-center">
                            <Image src={data[0].img} style={{maxWidth: '100%', maxHeight: '50vh'}} rounded className="product-image" />
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="border mx-1 rounded-4 opacity-75">
                                    <Image src={data[0].img} style={{maxWidth: '100%'}} rounded className="product-image" />
                                </span>
                            ))}
                        </div>
                    </Col>
                    <Col lg={6} className="mt-5">
                        <div className="ps-lg-3">
                            <h4 className="title display-6">
                                Behind every book, there's an untold narrative waiting to be unveiled.
                            </h4>
                            <div className="d-flex flex-row my-3">
                                <div className="text-warning mb-1 me-2">
                                    <span className="ms-1">4.5</span>
                                </div>
                                <span><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                <span className="text-success ms-2">In stock</span>
                            </div>
                            <div className="mb-3">
                                    <span className="h5" id="product-price">{data[0].price}$</span>
                                <span>/book</span>
                            </div>
                            <p>
                                <span className="fw-bold display-3" id="product-brand"></span>{data[0].title}
                            </p>
                                <p>Category: <span className="text-danger" id="product-description">
                                {data[0].category}
                                </span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>)}
            </>
    );
}

export default BookDetails;
