import React,{useState} from 'react'
import {Link} from "react-router-dom"

function Register() {
    const [user, setUser] = useState("")
    const [status, setStatus] = useState("")
    const [location, setLocation] = useState("")
    const [skills, setSkills] = useState("")
    const [github, setGithub] = useState("")
    const [bio, setBio] = useState("")

     const onSubmit = (event) => {
          event.preventDefault()      
        }

    const setData = () => {
        let details = { name:user, status:status, location:location, skills:skills, github:github, bio:bio }           
        const oldData = localStorage.getItem("myData") ? JSON.parse(localStorage.getItem("myData")) : [];
        const newData = [...oldData, details];
        localStorage.setItem("myData", JSON.stringify(newData));
    }

return (
    <div className="wrapper">
        <h1 className="reg">Create Your Profile</h1>      
        <form className="form"  onSubmit={onSubmit}>
            <div className="input-fields">
            <input required="true" className="input" type="text" value={user} onChange={(event) => {setUser(event.target.value)}} placeholder="Enter Name"/>
            <select required="true" className="input"  value={status}  onChange={(event) => {setStatus(event.target.value)}}>
                <option value="" disabled selected hidden >Select Your Profession</option>
                <option className="prof" value="Developer">Developer</option>
                <option className="prof" value="Senior Developer">Senior Developer</option>
                <option className="prof" value="Junior Developer">Junior Developer</option>
                <option className="prof" value="Manager">Manager</option>
                <option className="prof" value="Student/Learning">Student/Learning</option>
                <option className="prof" value="Instructor">Instructor</option>
                <option className="prof" value="Intern">Intern</option>
                <option className="prof" value="Other">Other</option>
            </select>
            <input required="true"className="input" type="text" value={location} onChange={(event) => {setLocation(event.target.value)}} placeholder="Enter Location"/>
            <input required="true"className="input"  type="text" value={skills} onChange={(event) => {setSkills(event.target.value)}} placeholder="Enter Skills"/>
            <input required="true"className="input" type="text" value={github} onChange={(event) => {setGithub(event.target.value)}} placeholder="Enter GithubID"/>
            </div>
            <div required="true"className="bio">
            <textarea type="text" value={bio} onChange={(event) => {setBio(event.target.value)}} placeholder="Enter your bio..."/>               
            <Link to="/developers"><button  className="submit" onClick={ () => setData()}>Submit</button></Link> 
           </div>
         </form>        
    </div>
) 
}

export default Register
