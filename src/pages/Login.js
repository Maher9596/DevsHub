import React, {useState} from "react"
import { useHistory } from "react-router-dom"

const Login = () => {
const history = useHistory()
// eslint-disable-next-line
const [login, setLogin] = useState({
    name: '',
    password: ''
})

const handleChange = (e) => {
    const {name,value} = e.target
    setLogin({[name]: value})
   
}

const handleSubmit = (e) => {
    e.preventDefault()
   history.push("/register")    
}

    return (       
        <div className="login-cont">
            <h1 className="log">Please Login!</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input required="true" className="login-input" type="text" name="name" placeholder="Name..." onChange={handleChange}/>
                <input required="true" className="login-input" type="password" name="password" placeholder="Password..." onChange={handleChange}/>
                <button className="login-submit" onSubmit={handleSubmit}  >Log In</button>
            </form>                            
        </div>    
    )
}

export default Login
