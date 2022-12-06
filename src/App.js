import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import Offers from "./Components/Seeoffers";
import Personal from "./Components/PersonalLoans";
import Homeloan from "./Components/HomeLoan";
import Vehicle from "./Components/VehicleLoan";
import Fixed from "./Components/FixedDeposit";
import Mutual from "./Components/MutualFund";
import DigitalSteptwo from "./Components/DigitalSteptwo";
import DigitalStepthree from "./Components/DigitalStepthree";
import DigitalStepFour from "./Components/DigitalSteppFour";
import UserDashboard from "./Components/UserDashboard";
import Footer from "./Components/Footer";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Seeoffers" element={<Offers />} />
        <Route path="/Personalloans" element={<Personal />} />
        <Route path="/HomeLoan" element={<Homeloan />} />
        <Route path="/VehicleLoan" element={<Vehicle />} />
        <Route path="/FixedDeposit" element={<Fixed />} />
        <Route path="/MutualFund" element={<Mutual />} />
        <Route path="/Digitalsteptwo" element={<DigitalSteptwo />} />
        <Route path="/Digitalstepthree" element={<DigitalStepthree />} />
        <Route path="/DigitalstepFour" element={<DigitalStepFour />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
