import React from "react";
//import cls from "./MainPage.module.css";
import AboutArea from "../AboutArea/AboutArea";
import AboutBand from "../AboutBand/AboutBand";
import BuyTickets from "../BuyTickets/BuyTickets";
import FirstScreen from "../FirstScreen/FirstScreen";

const MainPage = ({ users }) => {
    return (
        <main>
            <FirstScreen />
            <BuyTickets users={users} />
            <AboutArea />
            <AboutBand />
        </main>
    )
}

export default MainPage;