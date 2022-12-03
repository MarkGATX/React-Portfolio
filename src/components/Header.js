// import Bootstrap from 'react-bootstrap'
// import { gsap } from 'gsap';
import markCoffee from '../images/mark_with_coffee.jpg'



export default function Header({currentPage, handlePageChange}) {

    

    return (
        <>
            <header className="container-fluid p-0 d-flex flex-wrap justify-content-between align-items-end">
                <div className="col-md-9 col-lg-5 d-flex row align-items-end justify-content-start header-name">
                    <img className='img-fluid rounded-circle col-3 position-relative mt-2 ms-4 mb-2'
                        src={markCoffee} alt="Mark with huge coffee cup" />

                    <h1 className='col-8 m-0 p-0 pb-1 position-relative'>Mark Gardner</h1>
                </div>

                <div id="animation_container" className="col-2">
                    {/* <canvas id="canvas"
                    style="position: absolute; display: block; background-color:rgba(255, 255, 255, 0.00);"></canvas>
                <div id="dom_overlay_container">
                </div> */}
                </div>

                <nav className="navbar expand-lg col-md-6 col-lg-4 d-flex align-items-end">
                    <div className="container-fluid justify-content-end">
                        <ul className="navbar-nav mb-2 d-flex flex-row">
                            <li className="nav-item">
                                <a className={currentPage === 'Portfolio' ? "nav-link  ms-3 me-1 fs-4 active" : "nav-link  ms-3 me-1 fs-4 "} aria-current="page"  onClick={() => handlePageChange('Portfolio')} href="#Portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className={currentPage === 'Contact Me' ? "nav-link  ms-3 me-1 fs-4 active" : "nav-link  ms-3 me-1 fs-4 "} aria-current="page" onClick={() => handlePageChange('Contact Me')} href="#contactMe">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className={currentPage === 'About Me' ? "nav-link  ms-3 me-1 fs-4 active" : "nav-link  ms-3 me-1 fs-4 "} aria-current="page" onClick={() => handlePageChange('About Me')} href="#aboutMe">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className={currentPage === 'Resume' ? "nav-link  ms-3 me-1 fs-4 active" : "nav-link  ms-3 me-1 fs-4 "} aria-current="page" onClick={() => handlePageChange('Resume')} href="#Resume">Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row container-fluid pretend-border"></div>
                <div className="row container-fluid tagRow">
                    <div className="tagContainer d-flex justify-content-end p-0">
                        <h3 className="forgeBy align-self-start ">Forged by geekdom</h3>
                        <h3 className="fuelBy d-block align-self-end">Fueled by coffee.</h3>
                    </div>
                </div>
            </header>
        </>
    )
}