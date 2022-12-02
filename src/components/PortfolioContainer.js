import React, { useState } from 'react';

import Footer from './Footer';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer';
import Resume from './Resume';
import ContactForm from './ContactForm'


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Portfolio');

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