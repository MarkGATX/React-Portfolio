import React from 'react';
import "./Questions.css";

export default function Questions() {

    const questAboutMe = [
        ["Favorite food?", "Sushi"],
        ["Favorite movie?", "Serenity"],
        ["Star Wars or Star Trek?", "Both, all day long"],
        ["Hogwart's House?", "Hufflepuff, Huffle-proud"],
        ["Favorite Artist?", "John Singer Sargent"],
        ["Dream Job?", "Starfleet Captain"],
        ["Best Star Trek Captain?", "Captain Pike, SNW"],
        ["Hobbies?", "Board games, Legos, art, curling"],
        ["Guilty Pleasure?", "None! You shouldn't feel guilty for doing fun things."],
        ["Favorite Pokemon?", "Eevee"],
        ["Favorite Graphic Novel?", "Y: The Last Man"],
        ["Current Favorite Author?", "N.K. Jemison"],
        ["Scariest Show Ever?", "The Haunting of Hill House (Netflix)"],
        ["Marvel or DC?", "I choose both"],
        ["Mountains or Beach?", "Mountains all day"],
        ["Favorite Sport?", "Volleyball"],
        ["Second Favorite Sport?", "Soccer"],
        ["Cake or pie?", "Quit trying to make me choose!"],
        ["Favorite Fruit?", "Strawberries"],
        ["Favorite Board Games", "Powergrid, Brass, Dune:Imperium, Terraforming Mars"],
        ["Favorite Jedi", "Ahsoka Tano, even though she is no Jedi"]
    ]

    const questNum = Math.floor(Math.random() * questAboutMe.length);
    let quest = "Random question: " + questAboutMe?.[questNum]?.[0];
    let ans = questAboutMe?.[questNum]?.[1];

    return (
        <>
            <h5 id="question">{quest}</h5>
            <p id="answer" className="mb-5">{ans}</p>
        </>

    )
}