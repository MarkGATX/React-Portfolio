import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef, useState } from 'react'
import markCoffee from '../../images/mark_with_coffee.jpg'
import "./Header2.css";
import hamburger from '../../images/menu_icon.svg'


export default function Header({ currentPage, handlePageChange }) {
    const aniContain = useRef();
    const headerName = useRef();
    const pretendBorder = useRef();
    const navItem = useRef();
    const forgeBy = useRef();
    const fuelBy = useRef();
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const smallMenuRef = useRef();

    const handleHamburgerClick = () => {
        smallMenuRef.current.classList.toggle('smallMenuActive')
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1000px)');
        function handleMediaQueryChange(event) {
            setIsSmallScreen(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery); // Initial check
        const tl = gsap.timeline();
        const links = document.querySelectorAll('li')
        console.log(links)

        tl.from(headerName.current, { duration: 1.3, x: -1500 });
        tl.from('.aboutMe', { duration: 1.3, y: -20, opacity: 0, }, '-=.5');
        tl.from(aniContain.current, { duration: 1, x: -2500, y: +1 }, '-=1');
        tl.from(pretendBorder.current, { duration: 4, backgroundImage: 'radial-gradient(at 70% top, rgba(255,251,255,1) 1%, rgba(255,251,255,0) 30%)' }, '+=.2');
        tl.from(links, { duration: 1.5, y: 15, opacity: 0, stagger: 0.3 }, '-=3.5');
        tl.from(forgeBy.current, { duration: 1.5, y: -20, opacity: 0 }, '-=3.2');
        tl.from(fuelBy.current, { duration: 1.5, y: -20, opacity: 0, }, '-=3');
        tl.from('.projects', { duration: 1, opacity: 0 }, '-=2.0')

        //cleanup
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, [])

    return (
        <>
            {/* <header className="container-fluid p-0 d-flex flex-wrap justify-content-between align-items-end ">
                <div className="col-md-9 col-lg-5 d-flex row align-items-end justify-content-start header-name" ref={headerName}>
                    <img className='img-fluid rounded-circle col-3 position-relative mt-2 ms-4 mb-2'
                        src={markCoffee} alt="Mark with huge coffee cup" />

                    <h1 className='col-8 m-0 p-0 pb-1 position-relative'>Mark Gardner</h1>
                </div>
                <iframe id="cupAnimation" src={`${process.env.PUBLIC_URL}/coffee_cup_400.html`} title="Coffee cup spilling coffee" ref={aniContain}></iframe>


                <nav className="navbar expand-lg col-md-6 col-lg-4 d-flex align-items-end">
                    <div className="container-fluid justify-content-end">
                        <ul className="navbar-nav mb-2 d-flex flex-row text-center" ref={navItem}>
                            <li className="nav-item " >
                                <a className={currentPage === 'Portfolio' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Portfolio')} href="#Portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item" >
                                <a className={currentPage === 'About Me' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('About Me')} href="#aboutMe">About Me</a>
                            </li>
                            <li className="nav-item" >
                                <a className={currentPage === 'Contact Me' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Contact Me')} href="#contactMe">Contact</a>
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
            </header> */}
            <header className="container-fluid p-0 pb-5 col-12 d-flex flex-wrap justify-content-between align-items-end ">

                <div className='titleNavContainer col-12 d-flex justify-content-between align-items-center'>
                    <div className="col-md-6 col-lg-5 col-sm-8  d-flex row align-items-end justify-content-start header-name" ref={headerName}>
                        <img className='img-fluid rounded-circle col-3 position-relative mt-2 ms-4 mb-2'
                            src={markCoffee} alt="Mark with huge coffee cup" />

                        <h1 className='col-8 m-0 p-0 pb-1 position-relative'>Mark Gardner</h1>
                    </div>
                    {isSmallScreen ? (
                        <nav className="navbar expand-lg col-md-6 col-lg-7 d-flex column justify-content-end align-items-end">

                            <img src={hamburger} alt='hamburger navigation icon' height={24} width={24} className='menuIcon d-block' onClick={handleHamburgerClick} />

                            <div className="smallMenu" ref={smallMenuRef}>
                                <ul className="navbar-nav mb-2 d-flex flex-column text-center" ref={navItem}>
                                    <li className="nav-item " onClick={handleHamburgerClick}>
                                        <a className={currentPage === 'Portfolio' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Portfolio')} href="#Portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item" onClick={handleHamburgerClick}>
                                        <a className={currentPage === 'About Me' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('About Me')} href="#aboutMe">About Me</a>
                                    </li>
                                    <li className="nav-item" onClick={handleHamburgerClick}>
                                        <a className={currentPage === 'Contact Me' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Contact Me')} href="#contactMe">Contact</a>
                                    </li>

                                    <li className="nav-item" onClick={handleHamburgerClick}>
                                        <a className={currentPage === 'Resume' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Resume')} href="#Resume">Resume</a>
                                    </li>
                                </ul>
                            </div>

                        </nav>
                    ) : (
                        <nav className="navbar expand-lg col-md-6 col-lg-7 d-flex align-items-end">
                            <div className="container-fluid justify-content-end">
                                <ul className="navbar-nav mb-2 d-flex flex-row text-center" ref={navItem}>
                                    <a className={currentPage === 'Portfolio' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Portfolio')} href="#Portfolio">
                                        <li className="nav-item " >
                                            Portfolio
                                        </li>
                                    </a>
                                    <a className={currentPage === 'About Me' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('About Me')} href="#aboutMe"><li className="nav-item" >
                                        About Me
                                    </li>
                                    </a>
                                    <a className={currentPage === 'Contact Me' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Contact Me')} href="#contactMe">
                                        <li className="nav-item" >
                                            Contact
                                        </li>
                                    </a>

                                    <a className={currentPage === 'Resume' ? "nav-link  ms-3 me-1 fs-5 active" : "nav-link  ms-3 me-1 fs-5 "} aria-current="page" onClick={() => handlePageChange('Resume')} href="#Resume">
                                        <li className="nav-item" >
                                            Resume
                                        </li>
                                    </a>
                                </ul>
                            </div>

                        </nav>
                    )
                    }
                </div>
                <div className='animationContainer container-fluid justify-content-end'>
                    <iframe className='cupPosition' id="cupAnimation" src={`${process.env.PUBLIC_URL}/coffee_cup_400.html`} title="Coffee cup spilling coffee" ref={aniContain}></iframe>
                    <div className="container-fluid pretend-border" ref={pretendBorder}></div>
                    <div className="tagRow">
                            <div className="tagContainer-mobile d-flex justify-content-end p-0">
                                <h3 className="forgeBy" ref={forgeBy}>Forged by geekdom</h3>
                                <h3 className="fuelBy" ref={fuelBy}>Fueled by coffee.</h3>
                            </div>                    
                </div>
            </div>
        </header >
        </>
    )
}