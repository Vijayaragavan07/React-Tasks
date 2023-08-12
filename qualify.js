import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

export function Qualify() {
    return (
        <>
            <div className="container-fluid p-5">
                <div className="text-center text-white bg-primary aboutHead">
                    <h1>Education Qualifications</h1>
                </div>
                <div className="pt-4 container-fluid">
                    <div className="row row-cols-2 g-4  bg-light aboutHead">
                        <div className="col-12 col-lg-6">
                            <h2>School Qualification</h2>
                            <h3>HSC with 80.08 %</h3>
                            <h3>SSLC with 91.6 %</h3>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-6 aboutHead">
                            <h2><FontAwesomeIcon icon={faBuildingColumns} size="2xl" />College Qualification</h2>
                            <h3>Degree : Bacheoler of Engineering</h3>
                            <h3>Branch : Computer Science of Engineering</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}