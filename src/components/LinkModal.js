import React from 'react'
import Modal from 'react-bootstrap/Modal';
// import liveIcon from "../images/live_path_icon.svg";
import liveIcon from "../images/live_path_icon.svg"


export default function LinkModal({livePath, gitPath, setShow, show}) {

    console.log(livePath);
    console.log(gitPath);
 
    return (       
         <>
            <Modal show={show} onHide={() => setShow(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Which do you want to see...?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <a href={livePath} target="_blank" rel="noreferrer" className="livePath">
                        <div className="mb-2">
                            <img className='icon me-2' src={liveIcon} alt="icon for live site" title="Icon for live site" />Click
                            here to go to the live site.
                        </div>
                    </a>
                    <a href={gitPath} target="_blank" rel="noreferrer" className="gitPath">
                        <div className="mb-2 ">
                            <i className="devicon-github-original me-1" title="icon for GitHub"></i>
                            Click here to go to the GitHub Repository
                        </div>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}