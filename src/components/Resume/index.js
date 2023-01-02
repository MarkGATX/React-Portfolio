// import pdfResume from '../docs/Full-stack_Dev_Resume_2022.pdf'
import pdfResume from '../../docs/Mark_Gardner-Full-stack-Dev-resume-2022.pdf';
import "./Resume.css";


export default function Resume() {

    return (
      
        <section className="col-md-8 col-lg-8 resumeContainer">
            <h2 className="col-12 mb-4">Resume</h2>
            {/* <button className="button" onClick={()=>  window.open('../docs/Mark_Gardner_Full-stack_Dev_resume_2022.pdf', '_blank')}>Downloadable PDF</button> */}
            <a href={pdfResume} target="_blank" rel="noreferrer">Downloadable PDF here</a>
            <div className="container  row d-flex justify-content-center text-center mb-5">
                <h2>MARK GARDNER</h2>
                <h3 className="resumeSection">Front-End and Full-Stack Developer</h3>
            </div>
            <div className="row mb-5">
                <div className="col-6 text-start">
                    <p >Phone: 512-695-9490</p>
                    <p >LinkedIn: <a href="https://LinkedIn.com/in/Mark-Gardner-ATX" target="_blank" rel="noreferrer">LinkedIn.com/in/Mark-Gardner-ATX</a></p>
                    <p >Portfolio: <a href="https://markgatx.github.io/Portfolio-v2" target="_blank" rel="noreferrer">markgatx.github.io/Portfolio-v2</a></p>
                </div>
                <div className="col-6 text-start">
                    <p >Email: <a href="mailto:themarkgardner@gmail.com">themarkgardner@gmail.com</a></p>
                    <p >GitHub: <a href="https://GitHub.com/MarkGATX" target="_blank" rel="noreferrer">GitHub.com/MarkGATX</a></p>
                </div>
            </div>
            <div className="container row d-flex justify-content-center mb-5">
                <h3 className='col-12 resumeSection' >Summary</h3>
                <p >Front-end and Full Stack developer and creative multi-hyphenate with a passion for learning. Looks at every challenge as a chance to improve and thrives on the feeling of accomplishment at the end of a project. Balances a drive for perfection with an easy-going and friendly personality to work well in teams. Technology and all media should be simple, effective, and sometimes a little surprising in order to keep people engaged. </p>
            </div>
            <div className="container row d-flex justify-content-center mb-5">
                <h3 className='col-12 resumeSection'>Technical Skills</h3>
                <h5 className='resumeHead'>Technology: </h5>
                <div className='col-12 d-flex flex-wrap justify-content-start align-items-start'>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="HTML5" className="devicon-html5-plain colored"></i>
                        <p>HTML5</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="CSS3" className="devicon-css3-plain colored"></i>
                        <p>CSS3</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Javascript ES6+" className="devicon-javascript-plain colored"></i>
                        <p>Javascript ES6+</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="MySQL" className="devicon-mysql-plain colored"></i>
                        <p>SQL</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="NoSql" className="devicon-mongodb-plain colored"></i>
                        <p>NoSQL</p>
                    </div>
                </div>
                <h5 className='resumeHead'>Libraries: </h5>
                <div className='col-12 d-flex flex-wrap justify-content-start align-items-start'>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Bootstrap" className="devicon-bootstrap-plain colored"></i>
                        <p>Bootstrap</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Express" className="devicon-express-original colored"></i>
                        <p>Express.js</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Handlebars" className="devicon-handlebars-plain colored"></i>
                        <p>Handlebars</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="JQuery" className="devicon-jquery-plain colored"></i>
                        <p>JQuery</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Node.js" className="devicon-nodejs-plain colored"></i>
                        <p>Node.js</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Mongoose for MongoDb" className="devicon-mongodb-plain colored"></i>
                        <p>Mongoose</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="React" className="devicon-react-plain colored"></i>
                        <p>React</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Sequelize" className="devicon-sequelize-plain colored"></i>
                        <p>Sequelize</p>
                    </div>
                </div>
                <h5 className='resumeHead'>Tools:</h5>
                <div className='col-12 d-flex flex-wrap justify-content-start align-items-start'>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Adobe Creative Suite" className="devicon-photoshop-plain colored"></i>
                        <p>Adobe Creative Suite</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="GitHub" className="devicon-github-plain colored"></i>
                        <p>GitHub</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Heroku" className="devicon-heroku-plain colored"></i>
                        <p>Heroku</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Mongo Db Compass" className="devicon-mongodb-plain colored"></i>
                        <p>Mongo Db Compass</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Node Package Manager" className="devicon-npm-original-wordmark"></i>
                        <p>NPM</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="VS Code" className="devicon-vscode-plain colored"></i>
                        <p>VS Code</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="SQL Workbench" className="devicon-mysql-plain colored"></i>
                        <p>SQL Workbench</p>
                    </div>
                </div>
            </div>
            <div className="container row d-flex justify-content-center mb-5">
                <h3 className='col-12 resumeSection'>Projects Built</h3>
                <h4 className='resumeHead'>Migrate</h4>
                <p >Live site: <a href="https://migrate-abroad.herokuapp.com" target='_blank' rel='noreferrer'>https://migrate-abroad.herokuapp.com </a> </p>
                <p >GitHub Repo: <a href="https://github.com/richardjhong/migrate" target="_blank" rel='noreferrer'> https://github.com/richardjhong/migrate</a></p>
                <p >A MERN application to help people who are looking to relocate to another country to live or work find a place that will feel like home.</p>
                <p >Role:  Front-end design, Full-stack coding</p>
                <p className="mb-4" >Tools:  React, Express, MongoDB, JavasScript, CSS3, GoogleFonts, Photoshop,  Node.js, TypeKit, SASS, Greensock, Victory Charts, Unsplash API </p>

                <h4 className='resumeHead'>Garden<sup>2</sup></h4>
                <p >Live site: <a href="https://garden2ed.herokuapp.com/" target='_blank' rel='noreferrer'>https://garden2ed.herokuapp.com/ </a> </p>
                <p >GitHub Repo: <a href="https://github.com/MarkGATX/Garden2" target="_blank" rel='noreferrer'> https://github.com/MarkGATX/Garden2</a></p>
                <p >A full-stack web application to help home gardeners plan successful gardens with a comprehenive database of plants, care instructions, and garden layouts users can save to their accounts.</p>
                <p >Role:  Front-end design, branding logos and graphics creation</p>
                <p className="mb-4" >Tools:  Bootstrap, JavasScript, CSS3, GoogleFonts, Photoshop, Illustrator, Node.js, Handlebars </p>

                <h4 className='resumeHead'>Weather Dashboard</h4>
                <p >Live site: <a href="https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/" target="_blank" rel='noreferrer'>https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/</a> </p>
                <p >GitHub Repo: <a href="https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp" target="_blank" rel="noreferrer">https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp</a></p>
                <p >Accurate weather forecasts for cities anywhere in the world using two weather APIs while storing past searches in a simple but powerful interface.</p>
                <p >Role:Sole Developer</p>
                <p className="mb-4">Tools: Bootstrap, JavasScript, CSS3, GoogleFonts, OpenWeather API, WeatherBit.io API</p>
                
                <h4 className='resumeHead'>Word Guess Game</h4>
                <p >Live site: <a href="https://markgatx.github.io/The-Word-Guess-Game/" target="_blank" rel="noreferrer">https://markgatx.github.io/The-Word-Guess-Game/</a> </p>
                <p >GitHub Repo: <a href="https://github.com/MarkGATX/The-Word-Guess-Game" target="_blank" rel="noreferrer">https://github.com/MarkGATX/The-Word-Guess-Game</a></p>
                <p >A fun and challenging take on a simple word guess game. Added features are animations, tougher scoring rules, a keyboard rate limiter, and a API call at game end for dictionary definitions.</p>
                <p >Role:Sole Developer</p>
                <p >Tools:JavasScript, CSS3, GoogleFonts, Dictionary API</p>
            </div>
            <div className="container row d-flex justify-content-center">
                <h3 className='col-12 resumeSection' >Relevant Experience</h3>
                <h4 className='resumeHead'>Local Government Solutions  /  Developer</h4>
                <p >2017 - 2018,  AUSTIN</p>
                <p >Assisted in customer and business transitions to LGS after HCSS was acquired. Developed proposals and outlines for new customer training and retention programs and developed a proposal for a revamped online brand presence and website.</p>
                <h4 className='resumeHead'>The Weirdlings  /  Creator and Producer</h4>
                <p >2011 - 2020,   AUSTIN</p>
                <p >Guided growth of the channel and contributors to reach over 15,000 subscribers and 2.7 million lifetime views on YouTube. Engaged in the community and was elected to the Board of Directors of the International Academy of Web Televison where I was named Secretary. Created and maintained all social outlets and websites using Wordpress, Social Pilot, Tweetdeck and others. Implemented custom CSS to further customize pages and managed a team of creators to optimize videos for release.</p>
                <h4 className='resumeHead'>Hill Country Software and Support  / VP of Development</h4>
                <p >2008 - 2017,  AUSTIN</p>
                <p >Implemented a complete redesign and deployment of the web-based front end of a COBOL backend. Migrated the website to a Wordpress CMS and implemented systems to directly notify customers of updates to systems and important notes. Trained users and provided technical support as needed.</p>
            </div>
            <div className="container row d-flex justify-content-center">
                <h3 className="col-12 resumeSection">Education</h3>
                <p >University of Texas at Austin / Full-Stack Developer Certificate</p>
                <p >University of Texas at Austin  / Master in Sports Science and Nutrition</p>
                <p >University of Texas at Austin  / Bachelor of Arts in Plan II</p>
            </div>
        </section>
     
    )
}