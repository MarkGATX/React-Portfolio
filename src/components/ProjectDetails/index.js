import { projectData } from '../../utils/projectData';
import greensock from '../../images/gsap-greensock.svg'
import victory from '../../images/victory.png';
import materialize from '../../images/materialize.svg';
import googleFonts from "../../images/Google-Fonts-Logo.png"
import "./ProjectDetails.css";
import adobeFonts from "../../images/Adobe_Fonts.svg"
import { useEffect } from 'react';
import { gsap } from 'gsap';


export default function ProjectDetails({ linkTarget, filter }) {
    let filteredData = projectData;
    switch (filter) {
        case 'all':
            break;
        case "dev":
            filteredData = projectData.filter(project => project.type === "dev");
            break;
        case "vid":
            filteredData = projectData.filter(project => project.type === "vid");
            break;
        default:
            break;
    }

    useEffect(() => {
        const projectDetailsElements = document.querySelectorAll(".projectFeat");
        projectDetailsElements.forEach((projectDetailsElement, index) => {
            gsap.fromTo(projectDetailsElement, {
                opacity: 0,
                scale: .95,
                ease: "sine.out",
            }, {
                opacity: 1,
                scale: 1,
                delay: index * .2,
                duration: 1,

            });
        });
    }, [filter]);

    return (
        <>
            {filteredData.map((Val, key) => {
                const { title, desc, role, imgs, longDesc, tech, displayClass, livePath, gitPath, vidlink } = Val;
                return (
                    <article key={key} className={`${displayClass} projectFeat mb-5 d-flex flex-wrap justify-content-end align-content-start`} data-link={title} onClick={() => linkTarget(displayClass, title, livePath, gitPath, longDesc, role, imgs, vidlink)}>
                        <div className="projectFeatTitle col-12 p-2 " >
                            <h5>{title}</h5>
                            <p>{desc}</p>
                        </div>
                        <div className='projectTech d-flex justify-content-center align-items-center flex-wrap col-7'>
                            {tech.map((techVal, key) => {
                                if (techVal === "Greensock") {
                                    return (<img key={key} title="Greensock" className="icon " alt="greensock logo" src={greensock} />);
                                } else if (techVal === "victory charts") {
                                    return (<img key={key} title="victory charts" className="icon " alt="victory chart logo" src={victory} />)
                                } else if (techVal === "express") {
                                    return (<i key={key} title="express" className="devicon-express-original colored"></i>)
                                } else if (techVal === "Blender") {
                                    return (<i key={key} title="blender" className="devicon-blender-original colored"></i>)
                                } else if (techVal === "materialize") {
                                    return (<img key={key} title="Materialize" className="icon blue" alt="Materialize icon" src={materialize} />)
                                } else if (techVal === "Google Fonts") {
                                    return (<img key={key} title="Google Fonts" className="icon" alt="Google Fonts icon" src={googleFonts} />)
                                } else if (techVal === "Adobe Fonts") {
                                    return (<img key={key} title="Adobe Fonts" className="icon" alt="Adobe Fonts icon" src={adobeFonts} />)
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