import React from "react";
import { Form, Link } from "react-router-dom";
import Digacc from "../CSS/DigitalAccount.css";
import { useState, useRef } from "react";


const istencharacters = value => value.trim().length === 10;
const istwelvecharacters = value => value.trim().length === 12;

function DigitalAccount() {

    const [AadharNo, setAadharNo] = useState("");
    const [Panno, setPanno] = useState("");
    const [MobileNo, setMobileno] = useState("");

    const [formInputsValidity, setformInputsValidity] = useState({
        AadharNo: true,
        PanNo: true,
        MobileNo: true,
    })

    const AadharNoRef = useRef();
    const PanNoRef = useRef();
    const MobileNoRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAadharNo = AadharNoRef.current.value;
        const enteredPanNo = PanNoRef.current.value;
        const enteredMobileNo = MobileNoRef.current.value;



        const enteredAadharNoIsValid = istencharacters(enteredMobileNo);
        const enteredPanNoIsValid = istencharacters(enteredMobileNo);
        const enteredMobileNoIsValid = istencharacters(enteredMobileNo);

        setformInputsValidity({

            AadharNo: enteredAadharNoIsValid,
            PanNo: enteredPanNoIsValid,
            MobileNo: enteredMobileNoIsValid


        })

        const formIsValid = enteredAadharNoIsValid && enteredPanNoIsValid && enteredMobileNoIsValid;

        if (formIsValid) {
            return;
        }
    }

    return (
        <div className="Digital_Account">
            <div>
                <h1 className="Digital_Account_title">Get Started</h1>
            </div>
            <form id="form" action="#" method="POST" className="Account_Outer"  >
                <h3 className="Account_step1">Step1/4</h3>
                <div>
                    <div>
                        <label className="Label_Aadhar">Aadhar-No</label>
                    </div>
                    <input type="text" name="AaadharNo" id="AaadharNo" placeholder="Enter-AadharNo" ref={AadharNoRef} />
                    {!formInputsValidity.AadharNo && <p className="para_ad">Not Valid Aadharnumber</p>}
                </div>
                <br />
                <div>
                    <div>
                        <label className="Label_Pan">Pan-Number</label>
                    </div>
                    <input type="text" name="Panno" id="Panno" placeholder="Enter-Pan-No" ref={PanNoRef} />
                    {!formInputsValidity.PanNo && <p className="para_pa">Not Valid Panno</p>}
                </div>
                <br />
                <div>
                    <div>
                        <label className="Label_Mobile">Mobile-Number</label>
                    </div>
                    <input type="text" name="Mobile" id="Mobile" placeholder="Enter-MobileNo" ref={MobileNoRef} />
                    {!formInputsValidity.MobileNo && <p className="para_Mo">Enter a valid MobileNo</p>}
                </div>
                <br />
                <div>
                    <input type="checkbox" name="Mobile" id="Mobile" placeholder="Enter-MobileNo" />
                    <span>I am interested in opening a savings account with investec.<br />i hereby authorize
                        bank officials to contact me for opening an <br />account and agree to all Terms <br />and Conditions</span>
                </div>
                <div>
                    <input type="checkbox" name="Mobile" id="Mobile" placeholder="Enter-MobileNo" />
                    <span> I agree to Terms and Conditions for WhatsApp Banking</span>
                </div>
                <br />
                <button className="button_check" onClick={submitHandler}>Check</button>
                <Link to='/DigitalSteptwo'><button>Next Step</button></Link>

            </form>
        </div>

    )
}
export default DigitalAccount;