import React from "react";
import { Menu } from "../../Menu";

export function SocialButton(){
    return(
        <>
        <Menu/>
        <div className="socialBackground">
            <div className="socialContent py-1">
            <div className="buttonTitle"><h1 className="text-light title">Social Buttons</h1></div>
            <div className="buttonCollection py-1">
            <button className="btn btn-warning m-3">Like</button>
            <button className="btn btn-light m-3">Comment</button>
            <button className="btn btn-primary m-3">Share</button>
            </div>
            </div>
       
        </div>
        </>
    );
}