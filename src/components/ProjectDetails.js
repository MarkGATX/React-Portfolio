import { projectData } from '../utils/projectData';
import greensock from '../images/gsap-greensock.svg'
import victory from '../images/victory.png'
let livePath = '';
let gitPath = '';
let desc = '';
let role = '';
let imgs = [];
let title = '';
let vidlink = '';
let tech = [];

export default function ProjectDetails( {linkTarget} ) {

    return (
        <>
            {projectData.map((Val, key) => {
                console.log(Val)
                const { title, desc, role, imgs, longDesc, tech, displayClass } = Val;
                console.log(tech)
                return (
                    
                     <article key={key} className={`${displayClass} projectFeat mb-5 d-flex flex-wrap`} data-link={title} onClick={() => linkTarget( title )}> 
                        <div className="projectFeatTitle col-7 p-2 " >
                            <h5>{title}</h5>
                            <p>{desc}</p>
                        </div>
                        <div className='projectTech d-flex justify-content-center align-items-center ms-auto mt-auto flex-wrap '>
                            {tech.map((techVal, key) => {
                                if (techVal === "Greensock") {
                                    return (<img key={key} title="Greensock" className="icon " alt="greensock logo" src={greensock} />);
                                } else if (techVal === "victory charts") {
                                    return (<img key={key} title="victory charts" className="icon " alt="victory chart logo" src={victory} />)
                                } else if (techVal === "express") {
                                    return (<i key={key} title="express" className="devicon-express-original colored"></i>)
                                } else {
                                    return (<i key={key} title={techVal} className={`devicon-${techVal.toLowerCase()}-plain colored`}></i>)
                                }
                            }
                            )
                            }
                        </div>
                    </article>
                )
            }
            )
            }
        </>
    )
}