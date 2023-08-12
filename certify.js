import React from "react";

export function Certify() {
    return (
        <>
            <div className="container-fluid p-5">
                <div className="row row-cols-2 g-4">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="container-fluid  p-3 courseraPage">
                            <h1>Full Stack Course Certificates</h1>
                            <div className="p-3">
                                <dl>
                                    <dt>Coursera Certificates</dt>
                                    <div className="p-3">
                                        <dd>Tech foundation certificate</dd>
                                        <dd>HTML Phase 1 certificate </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="container-fluid p-3  academicPage ">
                            <h1>College Certificates</h1>
                            <div className="p-3">
                                <dl>
                                    <dt>Academic Certificates</dt>
                                    <div className="p-3">
                                        <dd>Internet of Things certificate</dd>
                                        <dd>Python Seminar certificate</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
}