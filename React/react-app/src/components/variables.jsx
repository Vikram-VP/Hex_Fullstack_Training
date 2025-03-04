const Variables=()=>{
    const name='harry'// remains same
    let age =21// might change
    let x=10;
    let y=5;
    let graduated=true

    let employee={
        name:"john doe",
        jobTitle:"Developer",
        city:"New York"
    }

    const contactInfo=()=>{
        console.log('Contact info revealed!!')
    }
    
    return(
        <div>
            <h3>Variable Component</h3>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>x+y:{x+y}</p>
            <p>Did you graduate?{graduated===true? 'Yes' : 'No'}</p>
            <hr/>
            <h3>Employee Details</h3>
            <span>Name:{employee.name}</span><br/>
            <span>Job title:{employee.jobTitle}</span><br/>
            <span>City:{employee.city}</span><br/>
            <button onClick={contactInfo}>Contact</button>
        </div>
    )
}
export default Variables;