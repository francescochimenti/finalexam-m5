import React from "react";
import MyNavbar from "../components/myNavBar/MyNavbar";
import BookDetails from "../components/bookDetails/BookDetails";
import MyFooter from "../components/myFooter/MyFooter";

const ProductPage = () => {
  return (
    <>
      <MyNavbar />
      <BookDetails />
      <MyFooter />
    </>
  );
};

export default ProductPage;
