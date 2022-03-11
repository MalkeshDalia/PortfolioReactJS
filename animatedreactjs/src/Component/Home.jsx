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
        imgsrc="https://cdn.dribbble.com/users/1912990/screenshots/6129020/media/5de7b1748ffb5977fc77840b16f939c5.gif"
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
