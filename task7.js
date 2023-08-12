import React from "react";
import { Menu } from "../../Menu";

export function Technology() {
    return (
        <>
        <Menu/>
            <div className="technoBackground">
                <div className="p-2 pb-3 text-center">
                    <h1 className="p-3 ">Learn 4.0 Technologies</h1>
                    <p className="p-3">Get trained by alumini of Ts and top companies like Amazon, Microsoft, Intel, Nividia, Qualcomm, etc. Learn directly from professionals involved in Product Development.</p>
                </div>
                <div className="p-5">
                    <div class="row row-cols-1 row-cols-md-2 g-5">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="card h-100 techShadowStyle1">
                                <div class="card-body">
                                    <h5 class="card-title p-3">Data Scientist</h5>
                                    <p class="card-text p-2">Data scientists gather and analyze large sets of structured and unstructured data</p>
                                </div>
                                <div className="text-end p-5">
                                <img src="https://cdn3.iconfinder.com/data/icons/team-management/136/54-512.png" class="card-img-top cardImageAlign" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="card h-100 techShadowStyle2">
                                <div class="card-body">
                                    <h5 class="card-title p-3">IOT Developer</h5>
                                    <p class="card-text p-2">IoT Developers are Professionals who can develop, manage and monitor IoT devices.</p>
                                </div>
                                <div className="text-end p-5">
                                <img src="https://emprotek.com/emprotek/images/IOT_icon.png" class="card-img-top cardImageAlign" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="card h-100 techShadowStyle3">
                                <div class="card-body">
                                    <h5 class="card-title p-3">VR Developer</h5>
                                    <p class="card-text p-2">AVR developer creates completely new digital envionments that people can see.</p>
                                </div>
                                <div className="text-end p-5">
                                <img src="https://th.bing.com/th/id/OIP.pELtE9rIVJC7ZtljQu4ieQHaHa?pid=ImgDet&rs=1" class="card-img-top cardImageAlign" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="card h-100 techShadowStyle4">
                                <div class="card-body">
                                    <h5 class="card-title p-3">ML Engineer</h5>
                                    <p class="card-text p-2">Machine learning engineers feed data into models defined by data scientists.</p>
                                </div>
                                <div className="text-end p-5">
                                <img src="https://cdn4.iconfinder.com/data/icons/engineering-color-filled/300/28-05-20-Engineering-icon-set-svg-24-512.png" class="card-img-top cardImageAlign" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}