import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../Menu";

export function Login() {
    return (
        <>
        <Menu/>
            <div className=" loginBackStyle p-5 d-flex justify-content-center align-item-center">

                <div class="card">
                    <div className="row g-0">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-3 ">
                            <img src="https://th.bing.com/th/id/R.f2fb82db5fc55db5deb1928a075bb888?rik=6baKl62Wi60I8Q&riu=http%3a%2f%2fs3.amazonaws.com%2fdigitaltrends-uploads-prod%2f2015%2f12%2fDell-SE2716H-monitor-hero1.jpg&ehk=VDmf4oJQbI2QknXC7SGBnB8A5gxjkL6tAQoJKCfUNbw%3d&risl=&pid=ImgRaw&r=0" class="card-img-top rounded-circle mt-2 imageAlign" alt="..." />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div class="card-body">
                                <form>
                                    <h2 className="text-center p-3">Member Login</h2>
                                    <div className="border-0 rounded bg-light p-2 m-2">
                                        <FontAwesomeIcon icon={faEnvelope} className="ms-2 fontColor" /><input type="email" placeholder="E-mail" className="w-50 rounded text-light p-2 bg-light border-0 ms-2" />
                                    </div>
                                    <div className="border-0 rounded bg-light p-2 m-2">
                                        <FontAwesomeIcon icon={faEnvelope} className="ms-2 fontColor" /><input type="password" placeholder="********" className="w-50 rounded text-light p-2 bg-light border-0 ms-2" />
                                    </div>
                                    <div className="border-0 rounded bg-success p-2 m-2 text-center">
                                    <button type="button" class="buttonStyle w-50  p-2 bg-success border-0 ms-2" >Login</button>
                                    </div>
                                    <div className="pt-1 d-flex justify-content-center align-items-center">
                                        <label>Forget <span>Username/Password ?</span></label>
                                    </div>
                                    <div className="pt-2 pb-2 d-flex justify-content-center align-items-center">
                                        <label><span>Create your account <FontAwesomeIcon icon={faArrowRight} /></span></label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}