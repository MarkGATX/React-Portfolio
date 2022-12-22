import React from 'react'
import Modal from 'react-bootstrap/Modal';
// import liveIcon from "../images/live_path_icon.svg";
import liveIcon from "../images/live_path_icon.svg";



export default function LinkModal({ livePath, gitPath, setShow, vidlink, show, title, desc, role, imgs }) {
    console.log(vidlink)
    console.log(livePath);
    console.log(gitPath);
    // vidlink = Object.values({vidlink})
    console.log(vidlink)
    const imgArray = imgs.map((image) => image.map((imageData, key) => <img key={key} src={imageData} alt={title} />))
    if (vidlink === undefined) {
        return (
            <>
                <Modal show={show} onHide={() => setShow(false)} size="lg">


                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>My role: {role}</h4>
                        <div className="mb-5">{desc}</div>
                        <div className='imgBlock mb-3 d-flex justify-content-around'>
                            {imgArray}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="d-flex flex-wrap justify-content-around">
                            <a href={livePath} target="_blank" rel="noreferrer" className="livePath col-5 text-decoration-none">
                                <div className="mb-2 ">
                                    <img className='icon' src={liveIcon} alt="icon for live site" title="Icon for live site" />Click
                                    here to go to the live site.
                                </div>
                            </a>
                            <a href={gitPath} target="_blank" rel="noreferrer" className="gitPath col-5 text-decoration-none">
                                <div className="mb-2 ">
                                    <i className="devicon-github-original" title="icon for GitHub"></i>
                                    Click here to go to the GitHub Repository
                                </div>
                            </a>
                        </div>
                    </Modal.Footer>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <Modal show={show} onHide={() => setShow(false)} size="lg">


                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>My role: {role}</h4>
                        <div className="mb-5">{desc}</div>
                        <div className='imgBlock mb-3 d-flex justify-content-around'>
                            {imgArray}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="d-flex flex-wrap justify-content-center col-10 text-center align-items-center">
                            <a href={vidlink} target="_blank" rel="noreferrer" className="livePath col-11 text-decoration-none">
                                <div className="m-0 ">
                                    <img className='icon' src={liveIcon} alt="icon for live site" title="Icon for live site" />Click here to see {title}.
                                </div>
                            </a>
                        </div>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}