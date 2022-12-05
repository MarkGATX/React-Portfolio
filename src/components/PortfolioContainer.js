import React, { useState, } from 'react';
import Footer from './Footer';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer';
import Resume from './Resume';
import ContactForm from './ContactForm'
import MoreAboutMe from './MoreAboutMe';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Portfolio');
    // const main = useRef();

    const renderMainSection = () => {
        if (currentPage === 'Portfolio') {
          return <ProjectsContainer />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        if (currentPage === 'Contact Me') {
          return <ContactForm />;
        }
        if (currentPage === 'About Me') {
            return <MoreAboutMe />;
          }
        return <ProjectsContainer />;
      };

      const handlePageChange = (page) => setCurrentPage(page);


    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main>
                <div className="container-fluid">
                    <div className="row justify-content-around">
                        <AboutMe />
                        {renderMainSection()}
                        <Contact />
                    </div>
                </div>
            </main>
            <Footer /> 
        </>
    )
}