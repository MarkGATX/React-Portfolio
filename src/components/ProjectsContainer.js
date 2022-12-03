import materialize from "../images/materialize.svg"
import { useState } from "react";
import LinkModal from "./LinkModal";
let livePath='' ;
let gitPath='' ;
// import gardenLive from 'https://garden2ed.herokuapp.com/';
// import gardenGit from 'https://github.com/MarkGATX/Garden2';

export default function ProjectsContainer() {
   

    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    const linkTarget = (link) => {
        switch (link) {
            case 'garden2':
                livePath = 'https://garden2ed.herokuapp.com/';
                gitPath = 'https://github.com/MarkGATX/Garden2';
                console.log(livePath);
                console.log(gitPath);
                setShow(true);
                break;
            case 'weatherDash':
                livePath = 'https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/';
                gitPath = 'https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp';
                setShow(true);
                break;
            case 'scribl':
                livePath = 'https://scribl-notes.herokuapp.com/';
                gitPath = 'https://github.com/MarkGATX/Scrible_Notes_CMS';
                setShow(true);;
                break;
            case 'wordguess':
                livePath = 'https://markgatx.github.io/The-Word-Guess-Game/';
                gitPath = 'https://github.com/MarkGATX/The-Word-Guess-Game';
                setShow(true);;
                break;
            case 'codeQuiz':
                livePath = 'https://markgatx.github.io/The-Coding-Quiz-Challenge/';
                gitPath = 'https://github.com/MarkGATX/The-Coding-Quiz-Challenge';
                setShow(true);;
                break;
            case 'playdate':
                livePath = 'https://markgatx.github.io/Playdate-The-App-for-Exhausted-Parents/';
                gitPath = 'https://github.com/MarkGATX/Playdate-The-App-for-Exhausted-Parents';
                setShow(true);
                break;
            case 'constell':
                window.open("https://www.youtube.com/playlist?list=PLtk51oTcFVK-t97eTz0cJXYqTu9zrxZx7");
                break;
            case 'tds':
                window.open("https://thisdoesntsuck.tv/");
                break;
            case 'hoa':
                window.open("https://www.youtube.com/playlist?list=PLtk51oTcFVK9U1QfOj18dAWu80QXEN9sG");
                break;
            case 'wg':
                window.open("https://youtu.be/MRzQGe8m_4A");
                break;
            case 'csssnips':
                gitPath = "https://markgatx.github.io/CSS-Cheat-Sheet/";
                livePath = "https://markgatx.github.io/CSS-Cheat-Sheet/"
                break;
            default:
                break;

        }
    }

    return (
        <>
            <section className="col-md-8 col-lg-8 projects">
                <h2 className="col-12 mb-4 projectHeadBG">My Projects</h2>
                <div className=" col-12 d-flex flex-wrap justify-content-around pb-4">
                    <article className="projectFeat garden2 mb-5 d-flex flex-wrap " data-link="garden2" onClick={() => linkTarget("garden2")}>

                        <div className="projectFeatTitle col-7 p-2 " >
                            <h5>Garden<sup>2</sup></h5>
                            <p>An app to help you plan and maintain your garden.</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap '>
                            <i title="CSS3" className="devicon-css3-plain colored"></i>
                            <i title="Sequelize" className="devicon-sequelize-plain colored"></i>
                            <i title="Bootstrap" className="devicon-bootstrap-plain colored"></i>
                            <i title="Handlebars" className="devicon-handlebars-plain colored"></i>
                            <i title="Heroku" className="devicon-heroku-plain colored"></i>
                            <i title="HTML5" className="devicon-html5-plain colored"></i>
                            <i title="jquery" className="devicon-jquery-plain colored"></i>
                            <i title="MySQL" className="devicon-mysql-plain colored"></i>
                            <i title="vscode" className="devicon-vscode-plain colored"></i>
                            <i title="Javascript" className="devicon-javascript-plain colored"></i>
                            <i title="NodeJS" className="devicon-nodejs-plain colored"></i>
                        </div>

                    </article>
                    <article className="projectFeat weatherDash mb-5 d-flex flex-wrap " data-link="weatherDash" onClick={() => linkTarget("weatherDash")}>
                        <div className="projectFeatTitle col-7 p-2">
                            <h5>Weather Dashboard</h5>
                            <p>A simple app to give you weather forecasts for... anywhere.</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <i title="Bootstrap" className="devicon-bootstrap-plain colored"></i>
                            <i title="HTML5" className="devicon-html5-plain colored"></i>
                            <i title="Javascript" className="devicon-javascript-plain colored"></i>
                            <i title="jquery" className="devicon-jquery-plain colored"></i>
                            <i title="CSS3" className="devicon-css3-plain colored"></i>
                            <i title="vscode" className="devicon-vscode-plain colored"></i>
                        </div>

                    </article>
                    <article className="projectFeat scribl mb-5 d-flex flex-wrap" data-link="scribl" onClick={() => linkTarget("scribl")}>
                        <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                            <h5>Scribl Notes</h5>
                            <p>A full-stack CMS platform.</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <i title="CSS3" className="devicon-css3-plain colored"></i>
                            <i title="Sequelize" className="devicon-sequelize-plain colored"></i>
                            <i title="MySQL" className="devicon-mysql-plain colored"></i>
                            <i title="Javascript" className="devicon-javascript-plain colored"></i>
                            <i title="Heroku" className="devicon-heroku-plain colored"></i>
                            <i title="HTML5" className="devicon-html5-plain colored"></i>
                            <i title="Bootstrap" className="devicon-bootstrap-plain colored"></i>
                            <i title="Handlebars" className="devicon-handlebars-plain colored"></i>
                            <i title="NodeJS" className="devicon-nodejs-plain colored"></i>
                            <i title="vscode" className="devicon-vscode-plain colored"></i>
                        </div>

                    </article>
                    <article className="projectFeat wordguess mb-5 d-flex flex-wrap" data-link="wordguess" onClick={() => linkTarget("wordguess")}>
                        <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                            <h5>Word Guess Game</h5>
                            <p>A simple wordguess game.</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <i title="CSS3" className="devicon-css3-plain colored"></i>
                            <i title="bootstrap" className="devicon-bootstrap-plain colored"></i>
                            <i title="HTML5" className="devicon-html5-plain colored"></i>
                            <i title="Javascript" className="devicon-javascript-plain colored"></i>
                            <i title="vscode" className="devicon-vscode-plain colored"></i>
                        </div>

                    </article>
                    <article className="projectFeat codeQuiz mb-5 d-flex flex-wrap" data-link="codeQuiz" onClick={() => linkTarget("codeQuiz")}>
                        <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                            <h5>CodeQuiz</h5>
                            <p>A quick quiz testing your knowledge of coding.</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <i title="CSS3" className="devicon-css3-plain colored"></i>
                            <i title="HTML5" className="devicon-html5-plain colored"></i>
                            <i title="Javascript" className="devicon-javascript-plain colored"></i>
                            <i title="vscode" className="devicon-vscode-plain colored"></i>
                        </div>

                    </article>
                    <article className="projectFeat playdate mb-5 d-flex flex-wrap" data-link="playdate" onClick={() => linkTarget("playdate")}>
                        <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                            <h5>PlayDate</h5>
                            <p>An app to help busy parents keep their kids entertained.</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <img className="icon blue" alt="materialize icon" src={materialize} />
                            <i title="Javascript" className="devicon-javascript-plain colored"></i>
                            <i title="HTML5" className="devicon-html5-plain colored"></i>
                            <i title="jquery" className="devicon-jquery-plain colored"></i>
                            <i title="vscode" className="devicon-vscode-plain colored"></i>
                            <i title="NodeJS" className="devicon-nodejs-plain colored"></i>
                        </div>

                    </article>
                    <article className="projectFeat csssnips mb-5 d-flex flex-wrap" data-link="csssnips" onClick={() => linkTarget("csssnips")}>
                        <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                            <h5>Css Snippets</h5>
                            <p>Quick page from bootcamp to store neat CSS tricks</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <i title="CSS3" className="devicon-css3-plain colored"></i>
                            <i title="HTML5" className="devicon-html5-plain colored"></i>
                            <i title="vscode" className="devicon-vscode-plain colored"></i>
                        </div>

                    </article>
                    <article className="projectFeat constell mb-5 d-flex flex-wrap" data-link="constell" onClick={() => linkTarget("constell")}>
                        <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                            <h5>Constellation</h5>
                            <p>Star Trek Adventures</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <i title="Blender" className="devicon-blender-original colored"></i>
                            <i title="Photoshop" className="devicon-photoshop-plain colored"></i>
                            <i title="Premiere Pro" className="devicon-premierepro-plain colored"></i>
                            <i title="After Effects" className="devicon-aftereffects-plain colored"></i>
                        </div>

                    </article>
                    <article className="projectFeat tds mb-5 d-flex flex-wrap" data-link="tds" onClick={() => linkTarget("tds")}>
                        <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                            <h5>TDS</h5>
                            <p>Food, drinks, and lifestyle.</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <i title="Wordpress" className="devicon-wordpress-plain colored"></i>
                            <i title="Photoshop" className="devicon-photoshop-plain colored"></i>
                            <i title="Premiere Pro" className="devicon-premierepro-plain colored"></i>
                        </div>

                    </article>

                    <article className="projectFeat hoa mb-5 d-flex flex-wrap" data-link="hoa" onClick={() => linkTarget("hoa")}>
                        <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                            <h5>Heroes of Awesome</h5>
                            <p>Dungeons and Dragons for everyone.</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <i title="Photoshop" className="devicon-photoshop-plain colored"></i>
                            <i title="Premiere Pro" className="devicon-premierepro-plain colored"></i>
                            <i title="After Effects" className="devicon-aftereffects-plain colored"></i>
                        </div>
                    </article>
                    <article className="projectFeat wg mb-5 d-flex flex-wrap" data-link="wg" onClick={() => linkTarget("wg")}>
                        <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                            <h5>Weird Girls Pilot Proof</h5>
                            <p>Five friends are the only ones who can save us.</p>

                        </div>

                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                            <i title="Photoshop" className="devicon-photoshop-plain colored"></i>
                            <i title="Premiere Pro" className="devicon-premierepro-plain colored"></i>
                            <i title="After Effects" className="devicon-aftereffects-plain colored"></i>
                        </div>
                    </article>
                </div>
            </section>
            <LinkModal livePath={livePath} gitPath={gitPath} setShow={setShow} show={show} />
        </>
    )


}