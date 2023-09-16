import React from "react";

import LatestRelease from "../components/latestRelease/LatestRelease";
import MyNavbar from "../components/myNavBar/MyNavbar";
import MyFooter from "../components/myFooter/MyFooter";

const HomePage = () => {

  return (
    <>
      <MyNavbar />
      <LatestRelease />
      <MyFooter />
    </>
  );
};

export default HomePage;
