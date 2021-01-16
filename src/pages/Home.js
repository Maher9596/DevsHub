import React from "react"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="homePage">
           <Link to ="/login"><a className="hover" href="#">Login to meet 
                Omani developers</a> </Link> 
        </div>
    )
}

export default Home
