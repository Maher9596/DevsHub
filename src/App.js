import './App.css'
import React from "react"
import {Switch, Route} from "react-router-dom"
import Nav from "./components/Nav"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Developers from "./pages/Developers"




function App() {
  return (
    <div>
    <Nav />
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path ="/login"><Login /></Route>
      <Route path ="/register"><Register /></Route>
      <Route path ="/developers"><Developers /></Route>

    </Switch>

    </div>
  )
}

export default App;
