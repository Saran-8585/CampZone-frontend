import "./sample.css"
import { useNavigate } from "react-router";

function login() {

    const nav = useNavigate();
    


    return(
        <>
            login page of campzone<br/>
            <form >
                <input type="textbox">username</input>
            </form>
        </>
    );
}

export default login;