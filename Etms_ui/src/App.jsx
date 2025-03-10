import { Route, Routes } from "react-router"
import Login from "./auth/login"
import AdminDashboard from "./components/admin/dashboard"
import EmployeeDashboard from "./components/employee/dashboard"
import EmployeeOnboarding from "./components/admin/onboarding_emp"
import EmployeeList from "./components/admin/employee-list"
import './App.css'
import AssignTask from "./components/admin/assign_task"
import EmployeeTask from "./components/employee/employee_task"
function App() {
 
  return (
    <>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard /> }/>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
         <Route path="/admin/employee-onboarding" element={<EmployeeOnboarding />}> </Route>  
         <Route path="/admin/employees" element={<EmployeeList />}> </Route>  
         <Route path="/admin/assign-task" element={<AssignTask />}> </Route>
         <Route path="/employee/tasks" element={<EmployeeTask />}> </Route>   
         </Routes>
    </>
  )
}

export default App