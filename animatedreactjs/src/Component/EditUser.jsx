import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  const history = useHistory();

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

  const inputEvent = (e) => {
    const { value, name } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // Getting Data from Db to modify
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/register/${id}`);
    setData(result.data);
  };

  // Posting Data after changed
  const formSubmit = async (e) => {
    e.preventDefault();
    const userData = data;
    await axios
      .put(`http://localhost:8080/register/${id}`, userData)
      .then((res) => {
        history.push("/registerusers").catch((err) => {
          alert(err.message);
        });
      });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Edit User </h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={data.name}
                  onChange={inputEvent}
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter Your Phone Number"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="address"
                  value={data.address}
                  onChange={inputEvent}
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-warning" type="submit">
                  Edit User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
