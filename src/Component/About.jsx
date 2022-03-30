import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc="https://www.innotech-sa.com/img/educational_informatics_ob.png"
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
