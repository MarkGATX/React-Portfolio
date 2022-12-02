import greensock from '../images/gsap-greensock.svg';
import animate from '../images/Adobe_Animate_CC_icon_(2020).svg';
import googleFonts from "../images/Google-Fonts-Logo.png"
import "../styles/index.css";

export default function Footer() {

    return (
        <footer className="container-fluid d-flex mt-5 p-3 justify-content-between">
        <div className="col-6 d-flex align-items-center flex-wrap">
            <p className="col-12">This site created with... </p>
            <div className="col-12 d-flex ">
                <p className="d-flex flex-row col-12">
                    <i title="bootstrap" className="devicon-bootstrap-plain d-block "></i>
                    <i title="CSS3" className="devicon-css3-plain d-block "></i>
                    <i title="Illustrator" className="devicon-illustrator-plain d-block "></i>
                    <img title="Greensock" className="icon " alt="greensock logo" src={greensock} />
                    <img title="Adobe Animate" className="icon" alt="adobe animate logo" src={animate} />
                    <img title="Google Fonts" className="icon" alt="Google Fonts logo" src={googleFonts} />
                </p>
            </div>
        </div>
        <div className="col-6 text-end">Copyright 2022 - Mark Gardner</div>
    </footer>
    )
    }