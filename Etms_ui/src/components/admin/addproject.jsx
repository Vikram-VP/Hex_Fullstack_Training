import { useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function AddProject() {
  const [title, setTitle] = useState("");
  const [sdesc, setSdesc] = useState("");
  const [edate, setEdate] = useState("");
  const [client, setClient] = useState("");
  const [techstack, setTechstack] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [msg,setMsg] = useState('')

  const add = async (e) => {
    e.preventDefault();
    console.log({ title, sdesc, edate, client, techstack });
    let url="http://localhost:5004/api/project/add"
    let header = {
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }
    try{
        const response= await axios.post(url,{
            'title':title,
            'shortDescription':sdesc,
            'estimatedEndDate':edate,
            'clientName':client,
            'techStack':techstack
        },{headers:header})
        setMsg("Project Added Successfully")
        console.log(response)
    }
    catch(err){
        console.log(err.message)
        setMsg("Error in adding project!")
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <AdminNavbar />
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-dark text-white">Add Project</div>
            <div className="card-body">
              <form onSubmit={add}>
                <div className="mb-3">
                  <label className="form-label">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Short Description:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={sdesc}
                    onChange={(e) => setSdesc(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Estimated Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    value={edate}
                    onChange={(e) => setEdate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Client:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">TechStack:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={techstack}
                    onChange={(e) => setTechstack(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProject;
