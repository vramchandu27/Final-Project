import React from "react";
import Image from "../Images/image1.jpg";
import style from "../CSS/Home.css";
import Loans from "../Components/Loans";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Home() {
    return (
        <div>
            <div className="Home">
                <div>
                    <h1 className="Home_Heading">Begin Journey With Us....</h1>
                    <Link to='/Seeoffers'><button className="Home_Button">See Offers</button></Link>
                </div>
                <div>
                    <img src={Image} className="Home_image" />
                </div>
            </div>
            <div>
                <Loans />
            </div>
            <div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default Home;