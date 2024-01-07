// import pdfResume from '../docs/Full-stack_Dev_Resume_2022.pdf'
// import pdfResume from '../../docs/Mark_Gardner-Front-End-Dev-resume-2024.pdf';
import pdfResume from '../../docs/Mark_Gardner-Front-End-Dev-resume-2024.pdf'
import greensock from '../../images/gsap-greensock.svg'
import "./Resume.css";


export default function Resume() {

    return (

        <section className="col-md-11 col-lg-8 resumeContainer">
            <h2 className="col-12 mb-4">Resume</h2>
            <a href={pdfResume} target="_blank" rel="noreferrer">Downloadable PDF here</a>
            <div className="row d-flex justify-content-center text-center mb-5">
                <h2>MARK GARDNER</h2>
                <h3 className="resumeSection">Front-End and Full-Stack Developer</h3>
            </div>
            <div className="row mb-5">
                <div className="col-sm-12 col-md-6 text-start">
                    <p >Phone: +1 512-695-9490</p>
                    <p >LinkedIn: <a href="https://LinkedIn.com/in/Mark-Gardner-ATX" target="_blank" rel="noreferrer">LinkedIn.com/in/Mark-Gardner-ATX</a></p>
                    <p >Portfolio: <a href="https://markgatx.github.io/React-Portfolio-v3/" target="_blank" rel="noreferrer">markgatx.github.io/React-Portfolio-v3/</a></p>
                </div>
                <div className="col-sm-12 col-md-6 text-start">
                    <p >Email: <a href="mailto:themarkgardner@gmail.com">themarkgardner@gmail.com</a></p>
                    <p >GitHub: <a href="https://GitHub.com/MarkGATX" target="_blank" rel="noreferrer">GitHub.com/MarkGATX</a></p>
                </div>
            </div>
            <div className="row d-flex justify-content-center mb-5">
                <h3 className='col-12 resumeSection' >Summary</h3>
                <p >{`As a Front-End Developer, I have experience in a variety of technologies, including Next.js, React, Vercel, JavaScript, Bootstrap, Material UI, GraphQL, MongoDB, HTML, and CSS. My technical skills are complemented by 13 years of video production experience, which has given me a keen eye for detail, a talent for visual storytelling, and the soft skills needed to work with diverse teams. I’m passionate about learning and thrive on tackling new challenges head-on. With over 18 years of professional experience across multiple industries, I’ve successfully worked on teams that consistently deliver quality products and I’m dedicated to delivering high-quality work that exceeds expectations.`}</p>
            </div>
            <div className="row d-flex justify-content-center mb-5">
                <h3 className='col-12 resumeSection'>Technical Skills</h3>
                <h5 className='resumeHead'>Technology: </h5>
                <div className='col-12 d-flex flex-wrap justify-content-center align-items-start'>
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
                <div className='col-12 d-flex flex-wrap justify-content-center align-items-start'>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="React" className="devicon-react-plain colored"></i>
                        <p>React</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Next.js" className="devicon-nextjs-original"></i>
                        <p>Next.js</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="MaterialUI" className="devicon-materialui-plain colored"></i>
                        <p>Material UI</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Bootstrap" className="devicon-bootstrap-plain colored"></i>
                        <p>Bootstrap</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <img title="Greensock" className="icon" alt="greensock logo" src={greensock} />
                        <p>Greensock</p>
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
                        <i title="Sequelize" className="devicon-sequelize-plain colored"></i>
                        <p>Sequelize</p>
                    </div>
                </div>
                <h5 className='resumeHead'>Tools:</h5>
                <div className='col-12 d-flex flex-wrap justify-content-center align-items-start'>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="GitHub" className="devicon-github-plain colored"></i>
                        <p>GitHub</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Firebase" className="devicon-firebase-plain colored"></i>
                        <p>Firebase</p>
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
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center me-3">
                        <i title="Adobe Creative Suite" className="devicon-photoshop-plain colored"></i>
                        <p>Adobe Creative Suite</p>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mb-5 resumeProjects">
                <h3 className='col-12 resumeSection'>Projects Built</h3>

                <h4 className='resumeHead'>The Softlife</h4>
                <p ><span className='projectSubtitle'>Live site:</span> <a href="https://thesoftlife.xyz/" target='_blank' rel='noreferrer'>https://thesoftlife.xyz/</a> </p>
                <p >A freelance development job leveraging the power of Next.js and React with Vercel hosting. I worked extensively with my clients to refine their vision for their e-commerce wishlist site in order to stay on schedule and within budget.</p>
                <p ><span className='projectSubtitle'>Role:</span>  Sole-developer</p>
                <p className="mb-4" ><span className='projectSubtitle'>Tools:</span>NextJS, React, JavaScript, GraphQL, Apollo GraphQL, MongoDB, SASS, CSS3, Google Fonts, Photoshop, Node.js, React Spring </p>

                <h4 className='resumeHead'>Luxe Cavallo</h4>
                <p ><span className='projectSubtitle'>Live site:</span> <a href="https://luxecavallo.herokuapp.com/" target='_blank' rel='noreferrer'>https://luxecavallo.herokuapp.com/</a> </p>
                <p ><span className='projectSubtitle'>GitHub Repo:</span> <a href="https://github.com/MarkGATX/luxecavallo" target="_blank" rel='noreferrer'> https://github.com/MarkGATX/luxecavallo</a></p>
                <p >A fictional luxury boutique created to be highly responsive and media-rich, providing an immersive and engaging user experience. </p>
                <p ><span className='projectSubtitle'>Role:</span>  Sole-developer</p>
                <p className="mb-4" ><span className='projectSubtitle'>Tools:</span>  React, GraphQL, Apollo, Express, MongoDB, Mongoose, JavaScript, CSS3, Adobe Font, Photoshop,  Node.js,  SASS, Greensock </p>

                <h4 className='resumeHead'>Migrate</h4>
                <p ><span className='projectSubtitle'>Live site:</span> <a href="https://migrate-abroad.herokuapp.com" target='_blank' rel='noreferrer'>https://migrate-abroad.herokuapp.com </a> </p>
                <p ><span className='projectSubtitle'>GitHub Repo:</span> <a href="https://github.com/MarkGATX/migrate" target="_blank" rel='noreferrer'> https://github.com/MarkGATX/migrate</a></p>
                <p >A MERN application to help people looking to relocate to another country find a place that will feel like home utilizing complex APIs and data-visualization.</p>
                <p ><span className='projectSubtitle'>Role:</span>  Front-end design, Full-stack coding</p>
                <p className="mb-4" ><span className='projectSubtitle'>Tools:</span>  React, Express, MongoDB, JavaScript, CSS3, GoogleFonts, Photoshop,  Node.js, TypeKit, SASS, Greensock, Victory Charts, Unsplash API </p>

                <h4 className='resumeHead'>Wheezy Waiter</h4>
                <p ><span className='projectSubtitle'>Live site:</span> <a href="https://markgatx.github.io/wheezywaiter/" target='_blank' rel='noreferrer'>https://markgatx.github.io/wheezywaiter/ </a> </p>
                <p ><span className='projectSubtitle'>GitHub Repo:</span> <a href="https://github.com/MarkGATX/wheezywaiter" target="_blank" rel='noreferrer'>https://github.com/MarkGATX/wheezywaiter</a></p>
                <p >An unofficial site for a YouTube creator that acts as a home for all of their projects, regardless of the rise and fall of other social outlets.
                </p>
                <p ><span className='projectSubtitle'>Role:</span>  Sole Developer</p>
                <p className="mb-4" ><span className='projectSubtitle'>Tools:</span>  React, Material UI, JavaScript, CSS3, GoogleFonts, YouTube API, Spotify API</p>

                <h4 className='resumeHead'>Weather Dashboard</h4>
                <p ><span className='projectSubtitle'>Live site:</span> <a href="https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/" target="_blank" rel='noreferrer'>https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/</a> </p>
                <p ><span className='projectSubtitle'>GitHub Repo:</span> <a href="https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp" target="_blank" rel="noreferrer">https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp</a></p>
                <p >Accurate weather forecasts for cities anywhere in the world using two weather APIs while storing past searches in a simple but powerful interface.</p>
                <p ><span className='projectSubtitle'>Role:</span> Sole Developer</p>
                <p className="mb-4"><span className='projectSubtitle'>Tools:</span> Bootstrap, JavaScript, CSS3, GoogleFonts, OpenWeather API, WeatherBit.io API</p>

            </div>
            <div className="row d-flex justify-content-center">
                <h3 className='col-12 resumeSection' >Relevant Experience</h3>
                <h4 className='resumeHead'>Freelance - Full-stack Developer</h4>
                <p >2023 - present,  AUSTIN</p>
                <ul className='ms-5'>
                    <li>Contract with clients to create full-stack applications that meet their specific needs and goals.</li>
                    <li>Develop applications using modern stacks, such as Next.js, React, Material UI, Bootstrap, GSAP, and more.</li>
                    <li>Work with clients to develop comprehensive style guides that align with their goals and branding.</li>
                    <li>Communicate and collaborate with clients about goals, timelines, and challenges through the development process</li>
                </ul>
                <h4 className='resumeHead'>Hello World Computer Science - Engineering Instructor</h4>
                <p >2023 - present,  AUSTIN</p>
                <ul className='ms-5'>
                    <li>Part-time Teaching Assistant for Computer Science classes at the Ann Richards School for Young Women Leaders</li>
                    <li>Teach students web development and guide troubleshooting in their code and errors in the CoSpaces coding environment.</li>
                </ul>
                <h4 className='resumeHead'>Local Government Solutions  -  Developer</h4>
                <p >2017 - 2018,  AUSTIN</p>
                <ul className='ms-5'>
                    <li>Assisted in customer and business transitions to LGS after HCSS was acquired. </li>
                    <li>Developed outlines for new customer training and retention programs and developed a revamped online brand presence.</li>
                </ul>
                <h4 className='resumeHead'>The Weirdlings  -  Creator and Producer</h4>
                <p >2011 - 2020,   AUSTIN</p>
                <ul className='ms-5'>
                    <li>Guided growth of the award-winning channel to reach over 15,000 subscribers and 2.8 million lifetime views on YouTube.</li>
                    <li>Engaged with the world-wide digital video community and was elected to the International Academy of Web Television Board of Directors where I was named Secretary. </li>
                    <li>Created and maintained all social outlets and websites for The Weirdlings using WordPress and custom CSS.</li>
                    <li>Developed all graphic effects for every video released, ranging from lower-thirds to full spash screens.</li>
                </ul>
                <h4 className='resumeHead'>Hill Country Software and Support - VP of Development</h4>
                <p >2008 - 2017,  AUSTIN</p>
                <ul className='ms-5'>
                    <li>Implemented a complete UI/UX redesign and deployment of the web-based application of a COBOL backend with Javascript, JQuery, and updated HTML and CSS.</li>
                    <li>Migrated the corporate website to a WordPress CMS and implemented systems to directly notify customers of updates to systems and important notes.</li>
                </ul>
            </div>
            <div className="row d-flex justify-content-center">
                <h3 className="col-12 resumeSection">Education</h3>
                <p >University of Texas at Austin / Full-Stack Developer Certificate</p>
                <p >University of Texas at Austin  / Master in Sports Science and Nutrition</p>
                <p >University of Texas at Austin  / Bachelor of Arts in Plan II</p>
            </div>
        </section>

    )
}