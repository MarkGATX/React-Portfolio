import materialize from "../images/materialize.svg"
import { useState } from "react";
import LinkModal from "./LinkModal";
import greensock from '../images/gsap-greensock.svg'
import victory from '../images/victory.png'
import migrateSplash from '../images/migrate-splash.jpg';
import migrateSingle from '../images/migrate-single-country.jpg';
import ProjectDetails from "./ProjectDetails";

let livePath = '';
let gitPath = '';
let desc= '';
let role ='';
let imgs =[];
let title='';
let vidlink='';



export default function ProjectsContainer() {


    const [show, setShow] = useState(false);
 
    const linkTarget = (link) => {
        vidlink='';
        switch (link) {
            case 'migrate':
                title = "Migrate";
                livePath = 'https://migrate-abroad.herokuapp.com/';
                gitPath = 'https://github.com/richardjhong/migrate';
                desc ="The project is a group final project for the University of Texas Full Stack Bootcamp. With the growing acceptance of remote work and many people simply wanting to explore living in another country, the amount of information you need can be overwhelming. Migrate is an app that aims to help potential expats who want to live, work, or retire in another country by providing an easy to use interface to see information on different countries around the world.";
                role = "Front-End and Full-Stack Developer";
                imgs = [migrateSplash, migrateSingle]
                console.log(livePath);
                console.log(gitPath);
                setShow(true);
                break;
            case 'garden2':
                title=`Garden${<sup>2</sup>}`
                livePath = 'https://garden2ed.herokuapp.com/';
                gitPath = 'https://github.com/MarkGATX/Garden2';
                desc ="Over the past few years, interest in home gardening has exploded. But starting and maintaining and garden can be a challenge even for experienced growers. This app is a group project from the UT-Austin Full-Stack Bootcamp that aims to make it easier. Users can select where they live and be presented with a list of crops that grow well in that area. Then they can use that information to develop a plan for a square foot garden by dragging and dropping plants in their virtual garden. It's a simple to use but powerful app that can help home gardeners everywhere.";
                role = "Front-End and Full-Stack Developer";
                imgs = ['https://github.com/MarkGATX/Garden2/raw/main/Assets/screenPlay.gif', 'https://github.com/MarkGATX/Garden2/raw/main/Assets/photo3.jpg','https://github.com/MarkGATX/Garden2/raw/main/Assets/photo5.jpg']
                
                console.log(livePath);
                console.log(gitPath);
                setShow(true);
                break;
            case 'weatherDash':
                title = "Weather Dashboard"
                livePath = 'https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/';
                gitPath = 'https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp';
                desc ="Weather dashboards may be everywhere, but so are the adds. This is a project for the UT-Austin Full-Stack Bootcamp that aims to create a simple yet powerful weather dashboard. This app uses two separate weather APIs to pinpoint locations and to return five day weather forecasts. The logic behind the app will even help you pinpoint exactly which city you want to search for by providing you with options from all over the world. Your last five searches are also saved in local storage for ease of use.";
                role = "Sole-Developer";
                imgs = ['https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp/raw/main/assets/images/Weather%20Dashboard%20small%20Screenshot.jpg']
                setShow(true);
                break;
            case 'scribl':
                title = "Scribl Notes"
                livePath = 'https://scribl-notes.herokuapp.com/';
                gitPath = 'https://github.com/MarkGATX/Scrible_Notes_CMS';
                desc ="This project for the UT-Austin Full-Stack Bootcamp is meant to be one of our first exposures to CMS systems. It has a basic user-login that will allow users to create Thoughts and also post replies to other user Thoughts. This is one of the earliest uses of Bootstrap for me as a developer and I've definitely learned a lot since then. In the end, I wanted to try and slightly different look and feel to the expected tech blog and I think I achieved that while maintaining good function on the back end.";
                role = "Sole-Developer";
                imgs = ['https://github.com/MarkGATX/Scrible_Notes_CMS/raw/main/public/images/scribl_notes_home.jpg', 'https://github.com/MarkGATX/Scrible_Notes_CMS/raw/main/public/images/scrible_notes_comments.jpg']
                setShow(true);
                break;
            case 'wordguess':
                title = "The Word Guess Game"
                livePath = 'https://markgatx.github.io/The-Word-Guess-Game/';
                gitPath = 'https://github.com/MarkGATX/The-Word-Guess-Game';
                desc ="The idea for this game was inspired by a Mini-Project meant to be done during one hour of our UT-Austin Full Stack Bootcamp. I really liked the idea and wanted to try and liven it up a bit. While the basic function of a high-score system has been used before in camp, I wanted to add some extra flair. I made a few modifications, including changing the score system to increase scores based on perceived difficulty, adding animations for slecting letters and winning the game, and including an API call to a dictionary to show the final word's definition after the game. In the end, I'm really proud of this simple application and one day I may even increase the size of the word array.";
                role = "Sole-Developer";
                imgs = ['https://github.com/MarkGATX/The-Word-Guess-Game/raw/main/assets/images/word_guess_game_screenshot.jpg', 'https://github.com/MarkGATX/The-Word-Guess-Game/raw/main/assets/images/word_guess_game_screenshot_labelled.jpg']
                setShow(true);;
                break;
            case 'codeQuiz':
                title = "The Coding Quiz"
                livePath = 'https://markgatx.github.io/The-Coding-Quiz-Challenge/';
                gitPath = 'https://github.com/MarkGATX/The-Coding-Quiz-Challenge';
                desc ="This coding quiz game is a project from the UT-Austin Full-Stack Bootcamp that challenged students early on with web APIs and all of our HTML and CSS knowledge to that point. I added a few more bells and whistles to my final project by randomizing the questions and the answers to each question. I also added some very basic :hover effects and some additional CSS stylings to give it a little more effect. I'm pround of the final result. In fact, the grader for the Bootcamp said, 'This is one of the most put-together, well-designed, and intuitive quizzes I've seen!' ";
                role = "Sole-Developer";
                imgs = ['https://github.com/MarkGATX/The-Coding-Quiz-Challenge/raw/main/assets/images/Coding%20Quiz%20Question%20example.jpg', 'https://github.com/MarkGATX/The-Coding-Quiz-Challenge/raw/main/assets/images/Coding%20Quiz%20High%20Scores.jpg']
                setShow(true);
                break;
            case 'playdate':
                title="Playdate"
                livePath = 'https://markgatx.github.io/Playdate-The-App-for-Exhausted-Parents/';
                gitPath = 'https://github.com/MarkGATX/Playdate-The-App-for-Exhausted-Parents';
                desc ="As a father of a young child, I can guarantee that some days you just don't know what to do. This app is meant to be an easy way for tired parents to find an answer to that question. This is the very first group project that was assigned at the UT-Austin Boot Camp. This was meant to be our first introduction to collaborative coding using GitHub while pushing our use of third-party APIs. My sole was primarily to use the MapBox API to render map locations. I also helped as needed on other aspects of the backend by helping to troubleshoot when called on.";
                role = "MapBox API, Back-end code";
                imgs = ['https://github.com/MarkGATX/Playdate-The-App-for-Exhausted-Parents/raw/main/assets/images/Playdate%20Screenshot.jpg']
                setShow(true);
                break;
            case 'constell':
                title = "Constellation"
                vidlink = "https://www.youtube.com/playlist?list=PLtk51oTcFVK-t97eTz0cJXYqTu9zrxZx7"
                // window.open("https://www.youtube.com/playlist?list=PLtk51oTcFVK-t97eTz0cJXYqTu9zrxZx7");
                desc ="This is one of my online streaming projects with The Heroes of Awesome that streamed live plays of the Star Trek Adventures Role-Playing Game. This was one of my most ambitiuous streaming projects since it entailed multiple cameras as well as seven people with mics and an interactive overlay during gameplay. I also used this as a reason to learn some basic Blender skills. I'm actually very proud of one of the starships I rendered. The Sovereign-class USS Mazu was based off another model but as I was trying to use it, I ended up completely remaking the vast majority of it into a fairly successful render. I still wish I could see that ship in action.";
                role = "Creator, Developer, Game Master";
                imgs = ['https://raw.githubusercontent.com/MarkGATX/React-Portfolio-v3/main/src/images/constellation%20background.jpg', 'https://raw.githubusercontent.com/MarkGATX/React-Portfolio-v3/main/src/images/constell-play.jpg']
                setShow(true);
                break;
            case 'tds':
                title = "This Doesn't Suck (TDS)"
                vidlink = "https://thisdoesntsuck.tv/"
                // window.open("https://thisdoesntsuck.tv/");
                desc ="This is another of my video production projects that turned into an even more exciting live-stream. It started as a simple food blog, and then after the members of our fan community asked for it, it turned into a cocktail stream. I invited bartenders, restauranteurs, food bloggers, and even a few YouTube celebrities on to a talk-show format where we also created brand new cocktails from scratch. Some were great. Some were... not. But it was always a good time. ";
                role = "Creator, Producer, Host";
                imgs = ['https://i.ytimg.com/vi/ddmUUBZ1wWs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBs3zEsvfkVSh6_SvHJWARkRTsuIw', 'https://i.ytimg.com/vi/6y4HTNJ4g6o/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1-WAppycL4JN8WjnhFWQUiqEr2A']
                setShow(true);
                break;
            case 'hoa':
                title = "The Heroes of Awesome"
                vidlink = "https://www.youtube.com/playlist?list=PLtk51oTcFVK9U1QfOj18dAWu80QXEN9sG"
                // window.open("https://www.youtube.com/playlist?list=PLtk51oTcFVK9U1QfOj18dAWu80QXEN9sG");
                desc ="This was the show that started a campaign that lasted for years. I created and produced the episodes that consisted of a group of new players learning how to play Dungeons and Dragons. It's still one of my most popular shows and even predates some of the more well-known role-playing groups online. I still have people recognize myself and some of the other players from our games and it's still one of my best memories as a video creator.";
                role = "Creator, Producer, Player";
                imgs = []
                setShow(true);
                break;
            case 'wg':
                title = "Weird Girls"
                vidlink = "https://youtu.be/MRzQGe8m_4A"
                // window.open("https://youtu.be/MRzQGe8m_4A");
                desc ="This is a feature-length, series project that I wrote several years ago. At one point an online network wanted to see a proof of concept to make decisions about moving ahead with projects. So I wrote a quick proof of concept pilot to introduce the world and characters and shot it over one weekend. I then edited the final footage and applied all the effects, except our limited creature effects that were done by an animation studio in Austin. In the end I love that we were able to accomplish what we did in such a short time. There are still some things that make me cringe that I wish I had time to reshoot, but all things considered I'm very proud of what we did. The network did pass on the full season, so if anyone wants to fund a great series, have I got a deal for you.";
                role = "Writer, Director, Editor";
                imgs = []
                setShow(true);
                break;
            case 'csssnips':
                title= "CSS Snippets"
                gitPath = "https://markgatx.github.io/CSS-Cheat-Sheet/";
                livePath = "https://markgatx.github.io/CSS-Cheat-Sheet/"
                desc ="This is a very simple HTML page that was done as a mini-project for one of our first tests of using CSS in the UT-Austin Full-Stack Boot Camp. I was able to get the page completed in the one-hour given and decided that I wanted to keep it around to use. So on occassion I will still post some trick or use of CSS to the Snippet page just in case I want an easy resource later.";
                role = "Sole-Developer";
                imgs = ['https://github.com/MarkGATX/CSS-Cheat-Sheet/raw/main/assets/images/css_snippet_bg.jpg']
                setShow(true);
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
                    {/* <article className="projectFeat migrate mb-5 d-flex flex-wrap " data-link="migrate" onClick={() => linkTarget("migrate")}>

                        <div className="projectFeatTitle col-7 p-2 " >
                            <h5>Migrate</h5>
                            <p>An app to help potential expats make decisions on their future</p>
                        </div>
                        <div
                            className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap '>
                                <i title="React" className="devicon-react-plain colored"></i>
                            <i title="CSS3" className="devicon-css3-plain colored"></i>
                            <i title="express" className="devicon-express-original colored"></i>
                            <i title="graphQL" className="devicon-graphql-plain colored"></i>
                            <i title="Heroku" className="devicon-heroku-plain colored"></i>
                            <i title="HTML5" className="devicon-html5-plain colored"></i>
                            <i title="Sass" className="devicon-sass-plain colored"></i>
                            <i title="Mongo" className="devicon-mongodb-plain colored"></i>
                            <i title="vscode" className="devicon-vscode-plain colored"></i>
                            <i title="Javascript" className="devicon-javascript-plain colored"></i>
                            <i title="NodeJS" className="devicon-nodejs-plain colored"></i>
                            <img title="Greensock" className="icon " alt="greensock logo" src={greensock} />
                            <img title="victory charts" className="icon " alt="victory chart logo" src={victory} />
                        </div>

                    </article>
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
                    </article> */}
                    < ProjectDetails linkTarget={linkTarget} />
                </div>
            </section>
            <LinkModal livePath={livePath} gitPath={gitPath} desc={desc} role={role} vidlink={vidlink} imgs={imgs} title={title} setShow={setShow} show={show} />
        </>
    )


}