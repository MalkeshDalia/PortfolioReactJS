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
    setData(res.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/register/${id}`);
    loaduser();
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="table-primary">
              Id
            </th>
            <th scope="col" className="table-success">
              Name
            </th>
            <th scope="col" className="table-danger">
              Phone
            </th>
            <th scope="col" className="table-warning">
              Email
            </th>
            <th scope="col" className="table-info">
              Address
            </th>
            <th scope="col" className="table-dark">
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
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/user/${val._id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mr-2"
                      to={`/edit/user/${val._id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-outline-danger"
                      onClick={() => {
                        deleteUser(val._id);
                      }}
                    >
                      Delete
                    </Link>
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
