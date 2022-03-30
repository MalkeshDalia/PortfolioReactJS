import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/register/${id}`);
    setData(result.data);
  };

  return (
    <>
      <div className="d-flex row">
        <ul style={{ listStyleType: "none" }}>
          <li>User ID : {id}</li>
          <li>Full Name : {data.name}</li>
          <li>Email Address : {data.email}</li>
          <li>Phone Number : {data.phone}</li>
          <li>Address : {data.address}</li>
        </ul>
        <div>
          <Link className="btn btn-outline-primary" to="/registerusers">
            Go to Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default User;
