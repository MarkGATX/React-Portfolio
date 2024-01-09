import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import makingCurry from '../../images/cooking_curry.webp';
import vegasAwards from '../../images/Awards_las_vegas.webp';
import directingWG from '../../images/directing_WG_pilot.webp';
import hiking from '../../images/hiking_in_mtns.webp';
import mugging from '../../images/mugging.webp';
import parisND from '../../images/paris_notre_dame.webp';
import stepRepeat from '../../images/step_repeat_LA.webp';
import wingedVict from '../../images/winged_victory.webp';
// import walesCoffee from '../images/coffee_Wales.webp';
import cardiffWheel from '../../images/exploring_Cardiff.webp';
import "./Gallery.css";
import { useEffect } from "react";
import { gsap } from "gsap";


export default function Gallery() {

    useEffect (()=> {
    const pics = document.querySelectorAll('.m-1');
    pics.forEach((pic) => 
    gsap.from(pic, {opacity:0}))
    });

    return (

        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 768: 2, 1900: 3 }}
        >

            <Masonry columnsCount={3}  >
                <img className="m-1" src={makingCurry} alt='making curry with my son' />
                <img className="m-1" src={vegasAwards} alt='awards in Vegas' />
                <img className="m-1" src={directingWG} alt='on set directing my pilot project' />
                <img className="m-1" src={stepRepeat} alt='step and repeat wall at Los Angeles awards' />
                <img className="m-1" src={parisND} alt='on the way to Notre Dame' />
                <img className="m-1" src={hiking} alt='hiking in the mountains' />
                <img className="m-1" src={mugging} alt='with the camera way too close' />
                <img className="m-1" src={wingedVict} alt='my favorite statue, Winged Victory' />
                <img className="m-1" src={cardiffWheel} alt='exploring Cardiff and the Wheel' />
            </Masonry>

        </ResponsiveMasonry>

    )
}