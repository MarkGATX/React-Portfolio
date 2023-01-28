import { useState } from "react";
import LinkModal from "../LinkModal";
import ProjectDetails from "../ProjectDetails";
import "./ProjectsContainer.css";

let livePath = '';
let gitPath = '';
let desc = '';
let role = '';
let imgs = [];
let title = '';
let vidlink = '';



export default function ProjectsContainer() {


    const [show, setShow] = useState(false);

    const linkTarget = (link, titleData, liveData, gitData, descData, roleData, imgsData, vidlinkData) => {    
        vidlink = { vidlinkData };
        title = { titleData };
        livePath = { liveData };
        gitPath = { gitData };
        desc = { descData };
        role = { roleData };
        imgs = Object.values({ imgsData })
        setShow(true);
    }

    return (
        <>
            <section className="col-md-8 col-lg-8 projects">
                <h2 className="col-12 mb-4 projectHeadBG">My Projects</h2>
                <div className=" col-12 d-flex flex-wrap justify-content-around pb-4">
                    < ProjectDetails linkTarget={linkTarget} />
                </div>
            </section>

            <LinkModal livePath={livePath.liveData} gitPath={gitPath.gitData} desc={desc.descData} role={role.roleData} vidlink={vidlink.vidlinkData} imgs={imgs} title={title.titleData} setShow={setShow} show={show} />
        </>
    )


}