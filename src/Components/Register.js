import React from "react";
import { useRef, useState } from "react";
import Reg from "../CSS/Register.css";



const isEmpty = value => value.trim() === '';
const istencharacters = value => value.trim().length === 10;

function Register() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");



    const [formInputsValidity, setformInputsValidity] = useState({
        FirstName: true,
        LastName: true,
        Phoneno: true,
        Address: true,
        EmailAddress: true,
        password: true,


    })


    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const phoneNumberRef = useRef();
    const AddressRef = useRef();
    const emailAddressRef = useRef();
    const passwordRef = useRef();


    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredFirstName = firstNameRef.current.value;
        const enteredLastName = lastNameRef.current.value;
        const enteredPhoneNo = phoneNumberRef.current.value;
        const enteredAddress = AddressRef.current.value;
        const enteredEmail = emailAddressRef.current.value;
        const enteredpassword = passwordRef.current.value;


        const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
        const enteredLastNameIsValid = !isEmpty(enteredLastName);
        const enteredPhonenoIsValid = istencharacters(enteredPhoneNo);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredEmailIsValid = !isEmpty(enteredEmail);
        const enteredpasswordIsValid = !isEmpty(enteredpassword);

        setformInputsValidity({

            FirstName: enteredFirstNameIsValid,
            LastName: enteredLastNameIsValid,
            Phoneno: enteredPhonenoIsValid,
            Address: enteredAddressIsValid,
            EmailAddress: enteredEmailIsValid,
            password: enteredpasswordIsValid,

        })

        const formIsValid = enteredFirstNameIsValid && enteredLastNameIsValid && enteredPhonenoIsValid && enteredAddressIsValid && enteredEmailIsValid && enteredpasswordIsValid;

        if (formIsValid) {
            return;
        }

    }

    return (
        <div id="formContainer">
            <form id="form" action="#" method="POST" onSubmit={confirmHandler}>
                <div className="form_fieldset">
                    <h1>Registration Form</h1>
                    <div>
                        <input type="text" name="fName" id="fName" placeholder="First Name"
                            ref={firstNameRef} />
                        {!formInputsValidity.FirstName && <p className="para_fn">Enter a valid Firstname</p>}
                    </div>
                    <div>
                        <input type="text" name="lName" id="lName" placeholder="Last Name"
                            ref={lastNameRef} />
                        {!formInputsValidity.LastName && <p className="para_ln">Enter a valid Lastname</p>}
                    </div>
                    <div>
                        <input type="text" name="npi" id="Phoneno" placeholder="Phone-no"
                            ref={phoneNumberRef} />
                        {!formInputsValidity.Phoneno && <p className="para_phone">Enter a valid Phoneno</p>}
                    </div>
                    <div>
                        <input type="text" name="address" id="address" placeholder="Address" ref={AddressRef} />
                        {!formInputsValidity.Address && <p className="para_address">Enter a valid Address</p>}
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Email Address"
                            ref={emailAddressRef} />
                        {!formInputsValidity.EmailAddress && <p className="para_email">Enter a valid Email</p>}
                    </div>
                    <div>
                        <input type="Password1" name="password" id="password" placeholder="Password" ref={passwordRef} />
                        {!formInputsValidity.password && <p className="para_password1">Enter a valid Password</p>}
                        <div />
                        <br /><br />
                        <input type="submit" name="submit" id="submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Register;