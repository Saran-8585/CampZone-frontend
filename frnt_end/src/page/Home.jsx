import "./sample.css"
import { useNavigate } from "react-router";


function home() {

    const nav = useNavigate();

    const login=()=>{
        nav("/login")
    }

    return(
        <>
            home page of campzone<br/>
            <a onClick={login}>login</a>
        </>
    );
}

export default home;