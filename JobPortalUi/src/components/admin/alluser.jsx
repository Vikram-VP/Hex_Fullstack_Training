import { NavLink } from "react-router"; // Fixed import
import AdminNavbar from "./navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 2;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const headers = {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                };

                const response = await axios.get(
                    `http://localhost:5003/api/user/getall?page=${currentPage}&size=${pageSize}`,
                    { headers }
                );

                setUsers(response.data.data);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, [currentPage]);

    const deleteUser = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            const headers = {
                Authorization: "Bearer " + localStorage.getItem("token"),
            };

            await axios.delete(`http://localhost:5003/api/user/delete/${id}`, { headers });

            setUsers(users.filter(user => user._id !== id)); // Fixed ID reference
            toast.success("User deleted successfully!");
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Failed to delete user.");
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <AdminNavbar />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <h3 className="text-center text-primary">Users List</h3>
                    <div className="card shadow-lg p-4">
                        <table className="table table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Profile</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Username</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={user._id}> {/* Fixed ID reference */}
                                            <th scope="row">{index + 1 + (currentPage - 1) * pageSize}</th>
                                            <td>
                                                <div className="circular_image">
                                                    <img
                                                        src={user.profilepic ? `http://localhost:5003/${user.profilepic}` : "https://via.placeholder.com/50"}
                                                        alt="Profile"
                                                    />
                                                </div>
                                            </td>
                                            <td>{user.name}</td>
                                            <td>{user.city || "N/A"}</td>
                                            <td>{user.username}</td>
                                            <td>
                                                {/* Edit */}
                                                <NavLink to={`/user-edit/${user._id}`}>
                                                    <i className="bi bi-pencil-square text-primary"></i>
                                                </NavLink>
                                                &nbsp;&nbsp;&nbsp;
                                                {/* Delete */}
                                                <a href="#" onClick={() => deleteUser(user._id)}>
                                                    <i className="bi bi-trash3 text-danger"></i>
                                                </a>
                                                &nbsp;&nbsp;&nbsp;
                                                {/* PDF */}
                                                <i className="bi bi-filetype-pdf text-warning"></i>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center">No users found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {/* Pagination Controls */}
                        <nav>
                            <ul className="pagination justify-content-center">
                                {/* Previous Button */}
                                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                    <a className="page-link" href="#" onClick={() => setCurrentPage(currentPage - 1)}>Previous</a>
                                </li>

                                {/* Page Numbers */}
                                {[...Array(totalPages)].map((_, index) => (
                                    <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
                                        <a className="page-link" href="#" onClick={() => setCurrentPage(index + 1)}>{index + 1}</a>
                                    </li>
                                ))}

                                {/* Next Button */}
                                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                    <a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>Next</a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersList;
