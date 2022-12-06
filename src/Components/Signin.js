import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Sign from "../CSS/Signin.css";
import UserDashboard from "./UserDashboard";

const isEmpty = value => value.trim() === '';
const istwentycharacters = value => value.trim() === 12;

function Signin(props) {

    const [formValidity, setformValidity] = useState({
        userNameRef: true,
        passwordRef: true
    })

    const userNameRef = useRef();
    const passwordRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredUserName = userNameRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const enteredUserNameIsValid = isEmpty(enteredUserName);
        const enteredPasswordIsValid = istwentycharacters(enteredPassword);

        setformValidity({
            userName: enteredUserNameIsValid,
            Password: enteredPasswordIsValid

        })

        const formIsValid = enteredUserNameIsValid && enteredPasswordIsValid;
        if (formIsValid) {
            {
                return;
            }
        }
    }

    return (
        <form method="post" className="Form" >
            <div className="Login_cont" onClick={confirmHandler}>
                <div className="Login_text">
                    <input type="text1" placeholder="Username" ref={userNameRef} />
                    {formValidity.userName && <p className="para_username">Please enter a valid Username</p>}
                </div>
                <div>
                    <input type="password" placeholder="Password" ref={passwordRef} />
                    {formValidity.Password && <p className="para_password">Please enter a valid password</p>}
                </div>
                <div>
                    <Link to='/UserDashboard'><button type="submit" className="Login_button" >Let me in.</button></Link>
                </div>
                <div>
                    <p>Don't Have an account ? please <Link to="/Signup"><b>Open Account??</b></Link></p>
                </div>
            </div>
        </form>

    )
}


export default Signin;