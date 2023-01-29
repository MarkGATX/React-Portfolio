// import Bootstrap from 'react-bootstrap'

import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from 'react'
import markCoffee from '../../images/mark_with_coffee.jpg'
// import init from '../utils/coffeCupInt'
// import { AnimateCC, GetAnimationObjectParameter } from "react-adobe-animate";
import "./Header.css";




export default function Header({ currentPage, handlePageChange }) {
    // const [animationObject, getAnimationObject] = useState < GetAnimationObjectParameter | null > (null);
    // const [animationObject, getAnimationObject] = useState(null);
    const aniContain = useRef();
    const headerName = useRef();
    const pretendBorder = useRef();
    const navItem = useRef();
    const forgeBy = useRef();
    const fuelBy = useRef();


    useEffect(() => {
        const tl = gsap.timeline();
        const links = document.querySelectorAll('li')
        // init();
        tl.from(aniContain.current, {duration:1, x:-2500 ,y:+1});
        tl.from(headerName.current, { duration: 1.3, x: -1500 }, '-=1.5');
        tl.from(pretendBorder.current, { duration: 4, backgroundImage: 'radial-gradient(at 70% top, rgb(255,251,255) 1%, rgb(255,251,255) 30%)' }, '-=.1');
        tl.from(links, { duration: 1, y: 15, opacity: 0, stagger: 0.3 }, '-=3.6');
        tl.from(forgeBy.current, { duration: 2, y: -20, opacity: 0 }, '-=3.0');
        tl.from(fuelBy.current, { duration: 2, y: -20, opacity: 0, }, '-=2.5');
        tl.from('main', { duration: 1, opacity: 0 }, '-=4.2')
    }, [])

    return (
        <>
            <header className="container-fluid p-0 d-flex flex-wrap justify-content-between align-items-end ">
                <div className="col-md-9 col-lg-5 d-flex row align-items-end justify-content-start header-name" ref={headerName}>
                    <img className='img-fluid rounded-circle col-3 position-relative mt-2 ms-4 mb-2'
                        src={markCoffee} alt="Mark with huge coffee cup" />

                    <h1 className='col-8 m-0 p-0 pb-1 position-relative'>Mark Gardner</h1>
                </div>
                <iframe id="cupAnimation" src={`${process.env.PUBLIC_URL}/coffee_cup_400.html`} title="Coffee cup spilling coffee" ref={aniContain}></iframe>


                <nav className="navbar expand-lg col-md-6 col-lg-4 d-flex align-items-end">
                    <div className="container-fluid justify-content-end">
                        <ul className="navbar-nav mb-2 d-flex flex-row" ref={navItem}>
                            <li className="nav-item " >
                                <a className={currentPage === 'Portfolio' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Portfolio')} href="#Portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item" >
                                <a className={currentPage === 'Contact Me' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Contact Me')} href="#contactMe">Contact</a>
                            </li>
                            <li className="nav-item" >
                                <a className={currentPage === 'About Me' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('About Me')} href="#aboutMe">About Me</a>
                            </li>
                            <li className="nav-item" >
                                <a className={currentPage === 'Resume' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Resume')} href="#Resume">Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row container-fluid pretend-border" ref={pretendBorder}></div>
                <div className="row container-fluid tagRow">
                    <div className="tagContainer d-flex justify-content-end p-0">
                        <h3 className="forgeBy align-self-start " ref={forgeBy}>Forged by geekdom</h3>
                        <h3 className="fuelBy d-block align-self-end" ref={fuelBy}>Fueled by coffee.</h3>
                    </div>
                </div>
            </header>
        </>
    )
}