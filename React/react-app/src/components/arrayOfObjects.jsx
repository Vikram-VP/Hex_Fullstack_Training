import userData from "../data/user";
function ArrayOfObjects(){

    const users=userData;
    return (
        <>
            {
                users.map((u,index)=>(
                    <div key={index}>
                        Name:{u.name}<br/>
                        Username:{u.username}<br/>
                        City:{u.address.city}<br/>
                        <hr/>
                    </div>
                ))
            }
        </>
    )
}

export default ArrayOfObjects;