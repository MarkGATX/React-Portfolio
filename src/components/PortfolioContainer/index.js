import React, { useState, } from 'react';
import Footer from '../Footer';
import Contact from '../Contact';
import AboutMe from '../AboutMe';
import Header from '../Header';
import ProjectsContainer from '../ProjectsContainer';
import Resume from '../Resume';
import ContactForm from '../ContactForm';
import MoreAboutMe from '../MoreAboutMe';
import ProjectDetails from '../ProjectDetails';
import "./PortfolioContainer.css";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');
  // const main = useRef();
console.log("%cHi there!", "color: #5355aa; font-family: sans-serif; font-size: 2em; font-weight: bolder; text-shadow: #000 1px 1px;");
console.log("Thanks for stopping by. I'm a front-end/full-stack developer looking to join a great team. Don't forget to check out my resume that's posted here. I'd love to talk to you more about my work and qualifications so send me a message via phone or email. I'm always around. ");

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
    if (currentPage === 'Details') {
      return <ProjectDetails />;
    }
    return <ProjectsContainer />;
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
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