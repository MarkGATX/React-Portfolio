import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import liveIcon from "../../images/live_path_icon.svg"
import "./LinkModal.css";


export default function LinkModal({ livePath, gitPath, setShow, vidlink, show, title, desc, role, imgs }) {
    console.log(imgs)
    const images = imgs[0]
    console.log(images)
    const [zoomedImage, setZoomedImage] = useState();
    // const imgArray = imgs.map((image) => image.map((imageData, key) => <img key={key} src={imageData} alt={title} onClick={(event) => handleImageClick(event, imageData)}
    // className={zoomedImage === imageData ? 'zoomed' : ''}/>))


    useEffect(() => {
        const handleDocumentClick = () => {
            setZoomedImage(null);
        };

        document.addEventListener('click', handleDocumentClick);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleImageClick = (event, imageData) => {
        event.stopPropagation();

        if (zoomedImage === imageData) {
            setZoomedImage(null);
        } else {
            setZoomedImage(imageData);
        }
    };

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>My role: {role}</h4>
                    <div className="mb-5">
                        <p>{desc}</p>
                    </div>
                    {/* <div className='imgBlock mb-3 d-flex justify-content-around'>
                        {imgArray}
                    </div> */}
                    <div className='imgBlock mb-3 d-flex justify-content-around'>
                        {images?.length > 0
                            ?
                            images.map((img, index) => (
                                <img key={index + img} src={img} alt={img.title} onClick={(event) => handleImageClick(event, img)}
                                    className={zoomedImage === img ? 'zoomed' : ''} />
                            ))
                            :
                            null
                        }
                        {/* {imgArray} */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {vidlink === undefined
                        ?
                        <div className="d-flex flex-wrap justify-content-around detailsLinks" >
                            {livePath
                                ?
                                <a href={livePath} target="_blank" rel="noreferrer" className="livePath col-5 text-decoration-none">
                                    <div className="mb-2 d-flex justify-content-start rounded">
                                        <img className='icon' src={liveIcon} alt="icon for live site" title="Icon for live site" />Live site
                                    </div>
                                </a>
                                :
                                null
                            }
                            {gitPath
                                ?
                                <a href={gitPath} target="_blank" rel="noreferrer" className="gitPath col-5 text-decoration-none">
                                    <div className="mb-2 d-flex justify-content-start align-items-center rounded">
                                        <i className="devicon-github-original detailsIcon" title="icon for GitHub"></i>
                                        GitHub
                                    </div>
                                </a>
                                :
                                null
                            }
                        </div>
                        :
                        <div className="d-flex flex-wrap justify-content-center col-10 text-center align-items-center">
                            <a href={vidlink} target="_blank" rel="noreferrer" className="livePath col-11 text-decoration-none">
                                <div className="m-0 ">
                                    <img className='icon' src={liveIcon} alt="icon for live site" title="Icon for live site" />Click here to see {title}.
                                </div>
                            </a>
                        </div>
                    }
                </Modal.Footer>

            </Modal>
            {/* <Modal show={showImageModal} onHide={() => setShowImageModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Image Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedImage && <img src={selectedImage} style={{ width: '100%' }} />}
                </Modal.Body>
            </Modal> */}
        </>
    )
} 
