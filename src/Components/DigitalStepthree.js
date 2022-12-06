import React from "react";
import { Link } from "react-router-dom";
import step from "../CSS/DigitalStepthree.css";

function DigitalStepthree() {
    return (
        <div>
            {/* <div>
                <h1 className="Digital_Account_title">Get Started</h1>
            </div> */}
            <div className="Account_outer1">
                <div>
                    <h3 className="Digital_Accounthead"> Step3/4</h3>
                </div>
                <div>
                    <h2 className="Digital_personal">Work Information</h2>
                </div>
                <div>
                    <div>
                        <label className="Label_Company">Organization Name</label>
                    </div>
                    <input type="text" name="cname" id="cname" placeholder="Enter Your Organization Name" />
                </div>
                <div>
                    <div>
                        <label className="Label_Fullname">Designation</label>
                    </div>
                    <input type="text" name="sName" id="sName" placeholder="Enter your Designation" />
                </div>
                <div>
                    <div>
                        <label className="Label_DateofBirth">Location</label>
                    </div>
                    <input type="text" name="DOB" id="DOB" placeholder="Enter yourLocation" />
                </div>
                <div>
                    <div>
                        <label className="Label_State">Salary </label>
                    </div>
                    <input type="text" name="City" id="City" placeholder="Enter Your Salary" />
                </div>
                <div>
                    <div>
                        <label className="Label_Address">Address</label>
                    </div>
                    <input type="text" name="Address" id="Address" placeholder="Enter Organization Address" />
                </div>
                <Link to='/DigitalStepFour'><button>Next Step</button></Link>
            </div>
        </div>
    )
}

export default DigitalStepthree;
