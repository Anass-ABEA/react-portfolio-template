import {FaGithub, FaLinkedin, FaYoutube} from "react-icons/all";
import React from "react";

export default function Header(){
    return (
        <div className="row bg-light p-3">
            <div className="col align-self-center title">
                <a href="/" style={{textDecoration:"none",color:"black"}}>
                    <h4>Portfolio</h4>
                </a>
            </div>

            <div className="col text-center align-self-center">
                <h4>Anass AIT BEN EL ARBI</h4>
            </div>

            <div className="col text-end" style={{fontSize: "2rem"}}>

                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anass-abea/">
                    <FaLinkedin style={{color: "#0a66c2"}}/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Anass-ABEA" className="mx-2">
                    <FaGithub style={{color: "black"}}/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/AnassAITBENELARBI">
                    <FaYoutube style={{color: "red"}}/>
                </a>
            </div>
        </div>
    )
}
