import React from "react";
import { Menu } from "../../Menu";

export function Congrats() {
    return (
        <>
        <Menu/>
            <div className="container col-lg-12">
                <div className="row">
                    <div className="Card-back pt-5">
                        <div className="sub-back">
                            <div className="p-3">
                            <h1>Congratulations !</h1>
                            </div>
                            <div class=" bg-info justify-content-center p-5">
                                <div class="body">
                                    <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="..." />
                                    <h4>Kiran V</h4>
                                    <p class="text">
                                        Vishnu Institute of computer Education and Technology Bhimavarasam.
                                    </p>
                                    <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}