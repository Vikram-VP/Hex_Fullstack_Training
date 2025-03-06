import "./App.css";
import {Route, Routes} from 'react-router';
import AddEmployee from "./components/addEmployee";
import ArrayOfObjects from "./components/arrayOfObjects";
import EmployeeList from "./components/employee_list";
import Navbar from "./components/navbar";
import Post from "./components/Post";
import StatesComp from "./components/StateComp";
import Efffects from "./components/useEffect_demo";
import AddUser from "./components/user_add";
import UserList from "./components/user_list";
import Variables from "./components/variables";
import UpdateEmployee from "./components/updateEmployee";
import { Bounce, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="container-fluid">
      <div className=" row mb-4">
        <div className="col-lg-12">
          <Navbar />
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
        </div>
      </div>
      <div className=" row mb-4">
        <div className="col-lg-12">
          <Routes>
            <Route path="/" element={<AddUser/>}/>
            <Route path="/employee" element={<EmployeeList/>}/>
            <Route path="/users" element={<UserList/>}/> 
            <Route path="/employee-update" element={<UpdateEmployee/>}/> 
          </Routes>
        </div>
      </div>

      {/* <Variables /> */}
      {/* <ArrayOfObjects/> */}
      {/* <StatesComp/> */}
      {/* <Post/> */}
      {/* <AddEmployee/> */}
      {/* <Efffects/> */}
    </div>
  );
}

export default App;
