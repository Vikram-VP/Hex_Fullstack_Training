import { Route, Routes } from "react-router";
import Login from "./auth/login";
import AdminDashboard from "./components/admin/dashboard";
import EmployeeDashboard from "./components/employee/dashboard";
import EmployeeOnboarding from "./components/admin/onboarding_emp";
import EmployeeList from "./components/admin/employee-list";
import AssignTask from "./components/admin/assign_task";
import EmployeeTask from "./components/employee/employee_task";
import AddProject from "./components/admin/addproject";
import AddTask from "./components/admin/addtask";
import ViewDetails from "./components/employee/viewdetail";
import { ToastContainer, Bounce } from "react-toastify";
import "./App.css";

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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route
          path="/admin/employee-onboarding"
          element={<EmployeeOnboarding />}
        />
        <Route path="/admin/employees" element={<EmployeeList />} />
        <Route path="/admin/assign-task" element={<AssignTask />} />
        <Route path="/employee/tasks" element={<EmployeeTask />} />
        <Route path="/admin/addproject" element={<AddProject />} />
        <Route path="/admin/addtask" element={<AddTask />} />
        <Route path="/employee/task/:id" element={<ViewDetails />} />
      </Routes>
    </>
  );
}

export default App;
