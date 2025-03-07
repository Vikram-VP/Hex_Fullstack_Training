import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const [username,setUsername] = useState(undefined);
    const [password,setPassword] = useState(undefined);
    const [msg,setmsg] =useState(undefined);
    const navigate=useNavigate();

    const processLogin=async($event)=>{
        $event.preventDefault();// this ensures that after form is submitted , it does not refresh the page
        let loginApi='http://localhost:5004/api/auth/login'
        console.log(`Inside processLogin.... with ${username} & ${password}` )

        try{
                const response=await axios.post(loginApi,{
                    "username":username,
                    "password":password
                })
                console.log(response)
                let role=response.data.role
                localStorage.setItem("token",response.data.token)
                switch(role){
                    case 'ROLE_ADMIN':
                        navigate('admin/dashboard')
                        break;
                        case 'ROLE_EMPLOYEE':
                            navigate('/employee/dashboard')
                            break; 
                        default: 
                            break;   
                }
                return
        }
        catch(err){
            console.log(err.message)
            setmsg('Invalid Credentials')
        }
    }
  return (
    <div className="row" style={{marginTop : '10%'}}>
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-header">ETMS LOGIN</div>
          <div className="card-body">
            {msg ? <div className="alert alert-primary">{msg}</div> : ""}
            <form onSubmit={processLogin}>
                <div className="mt-2">
                    <label>Username: </label>
                    <input type='text' className="form-control" onChange={($event)=>setUsername($event.target.value)}/>
                </div>
                <div className="mt-2">
                                <label>Password: </label>
                                <input type="password"
                                    className="form-control"
                                    onChange={($event) => setPassword($event.target.value)}
                                />
                            </div>
                <div className="mt-4">
                    <input type="submit" value="Login"
                    className="btn btn-primary"
                    disabled={!username || !password}/>
                </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}

export default Login;
