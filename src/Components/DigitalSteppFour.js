import React from "react";
import Final from "../CSS/DigitalStepFour.css";

function DigitalStepFour() {
    return (
        <div className="Final_Outer">
            <div>
                <h2 className="Final_Step">Step 4/4</h2>
            </div>
            <div>
                <div>
                    <label className="Label_Email">Email</label>
                </div>
                <input type="text" name="email" id="email" placeholder="Enter your Email" />
            </div>
            <br />
            <div>
                <input type="CheckBox" name="check" id="check" /><span>Please check all the details and click on confirm....</span>
            </div>
            <br />
            <button>Confirm</button>
        </div>
    )
}

export default DigitalStepFour;