import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RegisterUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const res = await axios.get("http://localhost:8080/register");
    setData(res.data);
  };

  const click = (e, val) => {
    console.log(val);
    alert(`hey ${JSON.stringify(val)}`);
  };

  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col" class="table-primary">
              Id
            </th>
            <th scope="col" class="table-success">
              Name
            </th>
            <th scope="col" class="table-danger">
              Phone
            </th>
            <th scope="col" class="table-warning">
              Email
            </th>
            <th scope="col" class="table-info">
              Address
            </th>
            <th scope="col" class="table-dark">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            return (
              <>
                <tr>
                  <td>{val._id}</td>
                  <td>{val.name}</td>
                  <td>{val.phone}</td>
                  <td>{val.email}</td>
                  <td>{val.address}</td>
                  <td>
                    <Link className="btn btn-primary mr-2">View</Link>
                    <Link className="btn btn-outline-primary mr-2">Edit</Link>
                    <Link className="btn btn-outline-danger">Delete</Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default RegisterUsers;
