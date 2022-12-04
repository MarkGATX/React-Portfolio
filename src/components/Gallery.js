import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import makingCurry from '../images/cooking_curry.jpg';
import vegasAwards from '../images/Awards_las_vegas.jpg';
import directingWG from '../images/directing_WG_pilot.jpg';
import hiking from '../images/hiking_in_mtns.jpg';
import mugging from '../images/mugging.jpg';
import parisND from '../images/paris_notre_dame.jpg';
import stepRepeat from '../images/step_repeat_LA.jpg';
import wingedVict from '../images/winged_victory.jpg';
// import walesCoffee from '../images/coffee_Wales.jpg';
import cardiffWheel from '../images/exploring_Cardiff.jpg';

export default function Gallery() {

    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 1100: 2, 1900:3}}
        >
            <Masonry columnsCount={3}>
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