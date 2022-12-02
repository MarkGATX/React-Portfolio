import materialize from "../images/materialize.svg" 

export default function ProjectsContainer() {

    return (
        <section className="col-md-8 col-lg-8 projects">
            <h2 className="col-12 mb-4 projectHeadBG">My Projects</h2>
            <div className=" col-12 d-flex flex-wrap justify-content-around pb-4">
                <article className="projectFeat garden2 mb-5 d-flex flex-wrap " data-link="garden2">

                    <div className="projectFeatTitle col-7 p-2 ">
                        <h5>Garden<sup>2</sup></h5>
                        <p>An app to help you plan and maintain your garden.</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap '>
                        <i title="Sequelize" className="devicon-sequelize-plain"></i>
                        <i title="Bootstrap" className="devicon-bootstrap-plain"></i>
                        <i title="Handlebars" className="devicon-handlebars-plain"></i>
                        <i title="Heroku" className="devicon-heroku-plain"></i>
                        <i title="jquery" className="devicon-jquery-plain"></i>
                        <i title="MySQL" className="devicon-mysql-plain"></i>
                        <i title="vscode" className="devicon-vscode-plain"></i>
                        <i title="Javascript" className="devicon-javascript-plain"></i>
                        <i title="NodeJS" className="devicon-nodejs-plain"></i>
                    </div>

                </article>
                <article className="projectFeat weatherDash mb-5 d-flex flex-wrap " data-link="weatherDash">
                    <div className="projectFeatTitle col-7 p-2">
                        <h5>Weather Dashboard</h5>
                        <p>A simple app to give you weather forecasts for... anywhere.</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <i title="Bootstrap" className="devicon-bootstrap-plain"></i>
                        <i title="Javascript" className="devicon-javascript-plain"></i>
                        <i title="jquery" className="devicon-jquery-plain"></i>
                        <i title="CSS3" className="devicon-css3-plain"></i>
                        <i title="vscode" className="devicon-vscode-plain"></i>
                    </div>

                </article>
                <article className="projectFeat scribl mb-5 d-flex flex-wrap" data-link="scribl">
                    <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                        <h5>Scribl Notes</h5>
                        <p>A full-stack CMS platform.</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <i title="Sequelize" className="devicon-sequelize-plain"></i>
                        <i title="MySQL" className="devicon-mysql-plain"></i>
                        <i title="Javascript" className="devicon-javascript-plain"></i>
                        <i title="Heroku" className="devicon-heroku-plain"></i>
                        <i title="Bootstrap" className="devicon-bootstrap-plain"></i>
                        <i title="Handlebars" className="devicon-handlebars-plain"></i>
                        <i title="NodeJS" className="devicon-nodejs-plain"></i>
                        <i title="vscode" className="devicon-vscode-plain"></i>
                    </div>

                </article>
                <article className="projectFeat wordguess mb-5 d-flex flex-wrap" data-link="wordguess">
                    <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                        <h5>Word Guess Game</h5>
                        <p>A simple wordguess game.</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <i title="bootstrap" className="devicon-bootstrap-plain"></i>
                        <i title="Javascript" className="devicon-javascript-plain"></i>
                        <i title="vscode" className="devicon-vscode-plain"></i>
                    </div>

                </article>
                <article className="projectFeat codeQuiz mb-5 d-flex flex-wrap" data-link="wordguess">
                    <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                        <h5>CodeQuiz</h5>
                        <p>A quick quiz testing your knowledge of coding.</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <i title="CSS3" className="devicon-css3-plain"></i>
                        <i title="HTML5" className="devicon-html5-plain"></i>
                        <i title="Javascript" className="devicon-javascript-plain"></i>
                        <i title="vscode" className="devicon-vscode-plain"></i>
                    </div>

                </article>
                <article className="projectFeat playdate mb-5 d-flex flex-wrap" data-link="playdate">
                    <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                        <h5>PlayDate</h5>
                        <p>An app to help busy parents keep their kids entertained.</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <img className="icon blue" alt="materialize icon" src={materialize} />
                            <i title="Javascript" className="devicon-javascript-plain"></i>
                            <i title="jquery" className="devicon-jquery-plain"></i>
                            <i title="vscode" className="devicon-vscode-plain"></i>
                            <i title="NodeJS" className="devicon-nodejs-plain"></i>
                    </div>

                </article>
                <article className="projectFeat csssnips mb-5 d-flex flex-wrap" data-link="csssnips">
                    <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                        <h5>Css Snippets</h5>
                        <p>Quick page from bootcamp to store neat CSS tricks</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <i title="CSS3" className="devicon-css3-plain"></i>
                        <i title="vscode" className="devicon-vscode-plain"></i>
                    </div>

                </article>
                <article className="projectFeat constell mb-5 d-flex flex-wrap" data-link="constell">
                    <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                        <h5>Constellation</h5>
                        <p>Star Trek Adventures</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <i title="Blender" className="devicon-blender-original"></i>
                        <i title="Photoshop" className="devicon-photoshop-plain"></i>
                        <i title="Premiere Pro" className="devicon-premierepro-plain"></i>
                        <i title="After Effects" className="devicon-aftereffects-plain"></i>
                    </div>

                </article>
                <article className="projectFeat tds mb-5 d-flex flex-wrap" data-link="tds">
                    <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                        <h5>TDS</h5>
                        <p>Food, drinks, and lifestyle.</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <i title="Wordpress" className="devicon-wordpress-plain"></i>
                        <i title="Photoshop" className="devicon-photoshop-plain"></i>
                        <i title="Premiere Pro" className="devicon-premierepro-plain"></i>
                    </div>

                </article>

                <article className="projectFeat hoa mb-5 d-flex flex-wrap" data-link="hoa">
                    <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                        <h5>Heroes of Awesome</h5>
                        <p>Dungeons and Dragons for everyone.</p>
                    </div>
                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <i title="Photoshop" className="devicon-photoshop-plain"></i>
                        <i title="Premiere Pro" className="devicon-premierepro-plain"></i>
                        <i title="After Effects" className="devicon-aftereffects-plain"></i>
                    </div>
                </article>
                <article className="projectFeat wg mb-5 d-flex flex-wrap" data-link="wg">
                    <div className="projectFeatTitle col-md-7 col-lg-6 p-2">
                        <h5>Weird Girls Pilot Proof</h5>
                        <p>Five friends are the only ones who can save us.</p>

                    </div>

                    <div
                        className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap'>
                        <i title="Photoshop" className="devicon-photoshop-plain"></i>
                        <i title="Premiere Pro" className="devicon-premierepro-plain"></i>
                        <i title="After Effects" className="devicon-aftereffects-plain"></i>
                    </div>
                </article>
            </div>
        </section>
    )


}