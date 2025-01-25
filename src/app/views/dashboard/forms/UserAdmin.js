import React, { useEffect, useState } from "react";
import axios from "axios";

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/get-users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming the JWT token is stored in localStorage
          },
        });
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Application Users</h2>
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px" }}>Short Name</th>
            <th style={{ fontSize: "15px" }}>Full Name</th>
            <th style={{ fontSize: "15px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="statement-key">{user.email}</td>
              <td className="statement-key">{user.fullname}</td>
              <td className="statement-key">{/* Edit and Delete actions */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAdmin;
