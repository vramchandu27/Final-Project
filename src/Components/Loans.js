import React from "react";
import Personal from "../Images/personalloan.jpg";
import Himg from "../Images/Homeloan.jpg";
import Vehimg from "../Images/carLoan.jpg";
import Fiximg from "../Images/Fixedeposit.jpg";
import Mutimg from "../Images/MutualFund.jpg";
import lcss from "../CSS/Loans.css";
import { Link } from "react-router-dom";

function Loans() {
    return (
        <div className="Loans_outer">
            <div className="Loans">
                <h1 className="Loans_Title">what are u looking for?</h1>
            </div>
            <div className="Loans_flex">
                <div className="Loans_Personal">
                    <h1 className="Personal_Title">Personal Loans</h1>
                    <Link to='/PersonalLoans'><img src={Personal} className="personal_img" /></Link>
                </div>
                <div className="Loans_Home">
                    <h1 className="Home_Title">Home Loans</h1>
                    <Link to='/HomeLoan'><img src={Himg} className="Home_img" /></Link>
                </div>
                <div className="Loans_Vehicle">
                    <h1 className="Vehicle_Title">Vehicle Loans</h1>
                    <Link to='/VehicleLoan'><img src={Vehimg} className="Vehicle_img" /></Link>
                </div>
                <div className="Loans_Fixed">
                    <h1 className="Fixed_Title">Fixed Deposit</h1>
                    <Link to='/FixedDeposit'><img src={Fiximg} className="Fixed_img" /></Link>
                </div>
                <div className="Loans_Mutual">
                    <h1 className="Mutual_Title">Mutual Funds</h1>
                    <Link to='/MutualFund'><img src={Mutimg} className="Mutual_img" /></Link>
                </div>
            </div>
        </div>

    )
}

export default Loans;