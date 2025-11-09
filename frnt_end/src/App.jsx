import Home from "./page/Home"
import Profile from "./page/Profile"
import Chats from "./page/Chats"
import Settings from "./page/Settings"
import Login from "./page/Login"
import {BrowserRouter as Router , Route , Routes } from "react-router-dom";


function App() {
  
    return(
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/chats" element={<Chats/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
      </>
    );
}

export default App
