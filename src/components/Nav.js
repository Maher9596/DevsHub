import React, {useState} from "react"
import {Link} from "react-router-dom"
import "../App.css"
import ReorderIcon from "@material-ui/icons/Reorder"

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false)

    return(
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                     <Link to ="/"><a>Home</a></Link> 
                     <Link to="/login"><a>Login</a></Link>  
                     <Link to="/register"><a>Register</a></Link>
                     <Link to ="/developers"><a>Developers</a></Link>
                </div>
            <button onClick={() => setShowLinks(!showLinks)}><ReorderIcon /></button>
            </div>
            <div className="rightSide">
                <h3 style={{color: "whitesmoke"}}>DevsHub</h3>
            </div>
            
        </div>

    )
}

export default Nav
