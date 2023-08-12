import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faBell } from "@fortawesome/free-regular-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../Menu";

export function Notify() {
    return (
        <>
        <Menu/>
            <div className="container-fluid text-center fontStyle">
                <div className="bg-info m-5 p-3 rounded">
                    <h5><FontAwesomeIcon icon={faCircleCheck} className="fontStyle" /> Information Message</h5>
                </div>
                <div className="bg-success m-5 p-3 rounded">
                    <h5><FontAwesomeIcon icon={faCircleCheck} className="fontStyle" /> Success Message</h5>
                </div>
                <div className="bg-warning m-5 p-3 rounded">
                    <h5><FontAwesomeIcon icon={faBell} className="fontStyle" /> Warning Message</h5>
                </div>
                <div className="bg-danger m-5 p-3 rounded">
                <h5><FontAwesomeIcon icon= {faTriangleExclamation} className="fontStyle"/> Error Message</h5>                             </div>
            </div>
        </>
    );
}