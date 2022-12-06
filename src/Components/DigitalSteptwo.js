import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import DigitalStept from '../CSS/DigitalSteptwo.css';

const istencharacters = value => value.trim().length === 10;
const isEmpty = value => value.trim() === '';

function DigitalSteptwo() {

    const [Surname, setSurname] = useState("");
    const [Fullname, setFullname] = useState("");
    const [DateofBirth, setDateofBirth] = useState("");
    const [State, setState] = useState("");
    const [City, setcity] = useState("");
    const [Address, setAddress] = useState("");

    const [formInputsValidity, setformInputsValidity] = useState({
        Surname: true,
        Fullname: true,
        DateofBirth: true,
        State: true,
        City: true,
        Address: true,

    })

    const SurNameRef = useRef();
    const FullNameRef = useRef();
    const DateofBirthRef = useRef();
    const StateRef = useRef();
    const CityRef = useRef();
    const AddressRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredSurname = SurNameRef.current.value;
        const enteredFullname = FullNameRef.current.value;
        const enteredDateofbirth = DateofBirthRef.current.value;
        const enteredState = StateRef.current.value;
        const enteredCity = CityRef.current.value;
        const enteredAddress = AddressRef.current.value;



        const enteredSurnameIsValid = !isEmpty(enteredSurname);
        const enteredFullnameIsValid = !isEmpty(enteredFullname);
        const enteredDateofbirthIsValid = !isEmpty(enteredDateofbirth);
        const enteredStateIsValid = !isEmpty(enteredState);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredAddressIsValid = !isEmpty(enteredAddress);



        setformInputsValidity({

            Surname: enteredSurnameIsValid,
            Fullname: enteredFullnameIsValid,
            DateofBirth: enteredDateofbirthIsValid,
            State: enteredStateIsValid,
            City: enteredCityIsValid,
            Address: enteredAddressIsValid

        })
        const formIsValid = enteredSurnameIsValid && enteredFullnameIsValid && enteredDateofbirthIsValid && enteredStateIsValid && enteredAddressIsValid;

        if (formIsValid) {
            return;
        }

    }

    return (
        <div>
            {/* <div>
                <h1 className="Digital_Account_title">Get Started</h1>
            </div> */}
            <div className="Account_outer1">
                <div>
                    <h3 className="Digital_Accounthead"> Step2/4</h3>
                </div>
                <div>
                    <h2 className="Digital_personal">Personal Information</h2>
                </div>
                <div>
                    <div>
                        <label className="Label_Surname">SurName</label>
                    </div>
                    <input type="text" name="sName" id="sName" placeholder="SurName" ref={SurNameRef} />
                    {!formInputsValidity.Surname && <p className="para_fn">Enter a valid Surname</p>}
                </div>
                <div>
                    <div>
                        <label className="Label_Fullname">FullName</label>
                    </div>
                    <input type="text" name="sName" id="sName" placeholder="FullName" ref={FullNameRef} />
                    {!formInputsValidity.Surname && <p className="para_fn">Enter a valid Surname</p>}
                </div>
                <div>
                    <div>
                        <label className="Label_DateofBirth">Date of Birth</label>
                    </div>
                    <input type="text" name="DOB" id="DOB" placeholder="Enter Date of Birth" ref={DateofBirthRef} />
                    {!formInputsValidity.Surname && <p className="para_fn">Enter a valid Surname</p>}
                </div>
                <br />
                <div>
                    <div>
                        <label className="Label_Gender">Gender</label>
                    </div>
                    <input type="CheckBox" name="check" id="check" /><span>Male</span>
                    <input type="CheckBox" name="check" id="check" /><span>Female</span>
                </div>
                <br />
                <div>
                    <div>
                        <label className="Label_State">State</label>
                    </div>
                    <input type="text" name="City" id="City" placeholder="Enter Your State" ref={StateRef} />
                    {!formInputsValidity.Surname && <p className="para_fn">Enter a valid Surname</p>}
                </div>
                <div>
                    <div>
                        <label className="Label_City">City</label>
                    </div>
                    <input type="text" name="City" id="City" placeholder="Enter Your City" ref={CityRef} />
                    {!formInputsValidity.Surname && <p className="para_fn">Enter a valid Surname</p>}
                </div>
                <div>
                    <div>
                        <label className="Label_Address">Address</label>
                    </div>
                    <input type="text" name="Address" id="Address" placeholder="EnterYour Address" />
                </div>
                <Link to='/DigitalStepthree'><button className="button_check2">Next Step</button></Link>
            </div>
        </div>
    )
}


export default DigitalSteptwo;