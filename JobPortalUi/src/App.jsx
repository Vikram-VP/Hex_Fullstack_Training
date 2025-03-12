import { Route, Routes } from "react-router";
import { ToastContainer, Bounce } from "react-toastify";

import Login from "./auth/Login";
import AdminDashboard from "./components/admin/dashboard";
import AddJob from "./components/admin/addjob";
import AllJobs from "./components/admin/alljobs";
import AddUser from "./components/admin/adduser";
import UsersList from "./components/admin/alluser";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UsersList/>} />
          <Route path="/admin/jobs" element={<AllJobs />} />
          <Route path="/admin/add-job" element={<AddJob />} />
          <Route path="/admin/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
