// import React, { useState } from 'react';
import React from 'react';
import Footer from './Footer';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer';


export default function PortfolioContainer() {


    return (
        <>
            <Header />
            <main>
                <div class="container-fluid">
                    <div class="row justify-content-around">
                         <AboutMe />
    <ProjectsContainer />
{/*<Contact />*/}
                    </div>
                </div>
            </main>
            {/* <Footer />  */}
        </>
    )
}