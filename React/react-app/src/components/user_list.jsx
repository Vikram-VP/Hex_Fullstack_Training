import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const userApi = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(userApi)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h1 className="display-6">
            User List
            <hr />
          </h1>
        </div>
      </div>
      <div className="row">
        {users.map((u, index) => (
          <div key={index} className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {u.name} , {u.website}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{u.email}</h6>
                <p className="card-text">
                  {u.address.street} , {u.address.city} {u.address.zipcode}
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserList;
