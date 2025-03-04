import { useState } from "react";

function AddEmployee(){
    let [name,setName] = useState(''); 
    let [email,setEmail] = useState(''); 
    let [dob,setDob] = useState('');
    let [nameErr, setNameErr] = useState(null);
    let [emailErr, setEmailErr] = useState(null);
    let [dobErr, setDobErr] = useState(null);
    const isValid=name&&email&&dob
    return(
        <form>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    Add Employee Details
                </div>
                <div className="card-body">
                    <div className="mt-4" >
                        <label>Name:  </label> 
                        <span style={{'fontSize': 'small' , 'color' : 'red'}}>{nameErr}</span>
                        <input className="form-control" type="text" 
                            onChange={$event=>{
                                setName($event.target.value)
                               
                                if($event.target.value === '' )
                                    setNameErr('Name is required')
                                else
                                    setNameErr('')

                                
                            }}/>
                    </div>
                    <div className="mt-4" >
                        <label>Email: </label>
                        <input className="form-control" type="text" 
                        onChange={$event=>{
                            setEmail($event.target.value)
                            if($event.target.value === '' )
                                setEmailErr('Email is required')
                            else
                                setEmailErr('')
                             
                        }} />
                        <span style={{'fontSize': 'small' , 'color' : 'red'}}> {emailErr}</span>
                    </div>
                    <div className="mt-4" >
                        <label>Date Of Birth: </label>
                        <input className="form-control" type="date" 
                        onChange={$event=>{
                            setDob($event.target.value)
                            if($event.target.value === '' )
                                setDobErr('DOB is required')
                            else
                                setDobErr('')
 
                        }}/>
                        <span style={{'fontSize': 'small' , 'color' : 'red'}}>{dobErr}</span>
                    </div>
                </div>
                <div className="card-footer">
                    <input type="submit" value="Add Employee" disabled={!isValid } /> 
                </div>
            </div>

            <div className="card">
                   <div className="card-body">
                        Name: {name} <br />
                        Email: {email} <br />
                        DOB: {dob} <br />
                   </div> 
            </div>
        </div>
        </form>
    )
}

export default AddEmployee; 