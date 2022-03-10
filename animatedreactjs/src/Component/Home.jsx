/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc="https://cielo24.com/wp-content/uploads/2016/03/innovative-technology.jpeg"
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
