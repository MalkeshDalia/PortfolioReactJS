/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
      <div className="container">
      <div class="row no-gutters mt-md-5">
  <div class="col-12 col-sm-6 col-md-6 mt-md-5" ><h1>
                    {props.name}
                    <strong className="brand-name">
                      {" "}
                      Innovative Technologies
                    </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      <button type="button" className="btn btn-outline-primary">{props.btname}</button>
                    </NavLink>
                  </div></div>
  <div class="col-6 col-md-6">
  <img
                      src={props.imgsrc}
                      className="img-fluid animated ml-lg-0"
                      alt="Image Error"
                    />

</div>
</div>
      </div>
    </section>
    </>
  );
};

export default Common;
