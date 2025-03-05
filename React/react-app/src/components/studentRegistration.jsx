import { useState } from "react";

function StudentRegister(){
    let [name,setName]=useState('');
    let [email,setEmail] = useState(''); 
    let [dob,setDob] = useState('');
    let [course,setCourse]=useState('');
    let [nameErr, setNameErr] = useState(null);
    let [emailErr, setEmailErr] = useState(null);
    let [dobErr, setDobErr] = useState(null);
    let [courseErr,setCourseErr]=useState(null);

    return(
        <form>
            <div className="conatiner">
                <div className="card">
                    <div className="card-header">
                        Add Student Details
                    </div>
                    <div className="card-body">
                        <div className="mt-4">
                            <label>Name:</label>
                            <input className="form-control" type="text"
                            onChange={$event=>{setName($event.target.value)
                                if($event.target.value ==='')
                                    setNameErr('Name is required')
                                else
                                    setNameErr('')
                            }} />
                            <span style={{'fontsize':'small','color':'red'}}>{nameErr}</span>
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
                    <div className="='mt-4">
                        <label>Cou</label>
                    </div>
                    </div>
                    <div className="card-footer">

                    </div>
                </div>

            </div>
        </form>
    )
}

export default StudentRegister