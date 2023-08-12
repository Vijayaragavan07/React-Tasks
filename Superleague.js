import React from "react";
import { Menu } from "../../Menu";

export function Superleague() {
    return (
        <>
        <Menu/>
            <div className="bg-black backColor">
                <div className="text-white text-center pt-5">
                    <h1 className="fontSize">Super Over League</h1>
                </div>
                <div className="text-center p-3">
                    <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" className="cardAlter" alt="..."/>
                    <img src=" https://assets.ccbp.in/frontend/react-js/csk-img.png" className="cardAlter" alt="..."/>
                </div>
            </div>
        </>
    );
}