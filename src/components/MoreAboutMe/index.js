
import React from 'react';
import Gallery from '../Gallery'
import "./MoreAboutMe.css";


export default function MoreAboutMe() {
    return (

        <section className="col-md-8 col-lg-8 contactMeContainer">
            <h2 className="col-12 mb-4 ps-2">More About Me</h2>
            <div className=" container-fluid col-12 d-flex justify-content-between flex-wrap ms-0">
                <div className="col-5">
                    <p> So you want to know even more about me?</p>
                    <p> Well that's nice to hear. Thank you!</p>
                    <p> I'm a Front-End and Full-Stack Developer who loves to push the boundaries on what I can achieve. When I come up with a concept in any field, I figure out what I need to learn to make it happen. Then I do it. </p>
                    <p>Sometimes that's easy. Sometimes it's much harder than anticipated. But regardless of how hard or easy it is, it always feels amazing to step back and look at the finished project. I can always see the things I need to improve on in the future and I can be my own worst critic, but at the end of the day I accomplished something exciting.</p>
                    <p>While I have experiences ranging from software development to film production, I'm most proud of getting to be a part of my family. My wife is amazingly patient and supportive of my constant drive to try new things and follow my dreams. My son an absolute joy and walking with him as he grows up is the best thing I've ever done.</p>
                    <p>On a personal level, I love good food, board games, Star Trek, Star Wars, stars, movies, and more than I can list here. I always say "I'll try anything twice," and that's paid off for me over the years.</p>
                    <p>Now I'm ready for my next challenge and can't wait to see where it takes me. Reach out and say hello!</p>
                </div>
                <div className='col-6'>
                    <Gallery />
                </div>
            </div>
        </section >
    )

}