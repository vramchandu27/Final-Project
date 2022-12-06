import React from "react";
import img23 from "../Images/profile.jpg";
import user from "../CSS/UserDashboard.css";

function UserDashboard() {
    return (
        <div className="user_flex">
            <div className="user_main">
                <img src={img23} className="user_img"></img>
                <div>
                    <h2 className="user_heading">User Profile</h2>
                </div>
                <div className="user_profile">
                    <h3>Rohan Kumar</h3>
                    <h3>rohan@gmail.com</h3>
                    <h3>RohanKumar</h3>
                    <h3>9382902848</h3>
                    <h3 >flat:no-982,Mumbai</h3>
                </div>
                <div>
                    <h3 className="user_transactions">Transactions</h3>
                </div>
                <div>
                    <h2 className="user_checkbook">Cheque-Book Request</h2>
                </div>
            </div>
            <div className="loan_dashboard">
                <div className="Loan_main">
                    <div>
                        <h1 className="loan_personal">Personal-Loan</h1>
                    </div>
                    <div className="Loan_description">
                        <h2>Interest @ 8%</h2>
                        <h2>One needs to be of a minimum age of 21 years and should have a valid set of documents like ID, income and residence proof, among other documents, to avail a Personal Loan from Axis Bank.</h2>
                        <h2>To ease the burden of paying off the Personal Loan immediately, you may opt for the EMI (Equated Monthly Instalment) facility. The repayment tenure can range from anywhere between 12 to 60 months. If you’re an Axis Bank customer, you can avail the best rates for Personal Loans!</h2>
                        <h2>Get a personal loan between Rs.50000 to Rs.40,00,000</h2>
                    </div>
                    <div>
                        <button className="Loan_Button">Apply Now</button>
                    </div>
                </div>
                <div className="Loan_main">
                    <div>
                        <h1 className="loan_personal">Credit-Card</h1>
                    </div>
                    <div className="Loan_description">
                        <h2>Interest @ 8%</h2>
                        <h2>One needs to be of a minimum age of 21 years and should have a valid set of documents like ID, income and residence proof, among other documents, to avail a Personal Loan from Axis Bank.</h2>
                        <h2>To ease the burden of paying off the Personal Loan immediately, you may opt for the EMI (Equated Monthly Instalment) facility. The repayment tenure can range from anywhere between 12 to 60 months. If you’re an Axis Bank customer, you can avail the best rates for Personal Loans!</h2>
                        <h2>Get a personal loan between Rs.50000 to Rs.40,00,000</h2>
                    </div>
                    <div>
                        <button className="Loan_Button">Apply Now</button>
                    </div>
                </div>
                <div className="Loan_main">
                    <div>
                        <h1 className="loan_personal">Home-Loan</h1>
                    </div>
                    <div className="Loan_description">
                        <h2>Interest @ 9%</h2>
                        <h2>One needs to be of a minimum age of 21 years and should have a valid set of documents like ID, income and residence proof, among other documents, to avail a Personal Loan from Axis Bank.</h2>
                        <h2>To ease the burden of paying off the Personal Loan immediately, you may opt for the EMI (Equated Monthly Instalment) facility. The repayment tenure can range from anywhere between 12 to 60 months. If you’re an Axis Bank customer, you can avail the best rates for Personal Loans!</h2>
                        <h2>Get a personal loan between Rs.50000 to Rs.40,00,000</h2>
                    </div>
                    <div>
                        <button className="Loan_Button">Apply Now</button>
                    </div>
                </div>
                <div className="Loan_main">
                    <div>
                        <h1 className="loan_personal">Car-Loan</h1>
                    </div>
                    <div className="Loan_description">
                        <h2>Interest @ 7%</h2>
                        <h2> Axis Bank’s New Car Loan offers car loans from Rs. 1 Lakh upto 100% on-road funding along with a host of benefits that include attractive interest rates, comfortable tenure, Axis eDGE Reward points, etc Before applying for a car loan online, make sure to use the car loan calculator to find out your EMI.</h2>
                        <h2>To ease the burden of paying off the Personal Loan immediately, you may opt for the EMI (Equated Monthly Instalment) facility. The repayment tenure can range from anywhere between 12 to 60 months. If you’re an Axis Bank customer, you can avail the best rates for Personal Loans!</h2>
                        <h2>Avail funding from Rs.1,00,000 upto  100% on road funding for up to-7 years.</h2>
                    </div>
                    <div>
                        <button className="Loan_Button">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;