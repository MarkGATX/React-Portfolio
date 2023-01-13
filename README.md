# Personal React Portfolio 

## An update of my portfolio page using React, Bootstrap, Greensock, and more.


___


This project is meant to push our understanding and famililarity with React by having us redesign our portfolio pages to take advantage of React functionality.

I considered starting from scratch to really get a feel for the framework, but I liked the foundation of my version 2 Portfolio and decided I wanted to expand on that. That meant I had to reimagine my entire page as components nested all around each other. Considering the nunmber of nested `div` and DOM elements I already had, this was going to be a challenge with the limited time to turn things in for my Bootcamp projects.

Let's see how it all turned out.

[You can see it live here to take a look. ](https://markgatx.github.io/React-Portfolio-v3/)


___



## How to use

When you first get to the page you'll be greeted wity flying coffee cups and the body of the page animating in. 

Once the page is fully drawn, you'll see two sections: "About Me" and "My Projects."

![Portfolio screenshot](./readme_images/Portfolio_v_3_fullscreen.jpg)

The "About Me" section gives a quick glimpse into who I am and the philosophy I take when I create things. There's also a random fact about me that will change with every page load. Underneath that, you'll see a listing of technologies that I've used in projects in the past.

"My Projects," appropriately enough, showcases my projects. It's a combination of personal projects I've done by myself and other development projects I've worked on with other people. There are even some of the projects I've completed in the digital media space. 

When you hover over a project, the project will switch to full color and a box will open at the bottom right. That shows different technologies that were used to create that project. If you're not sure what an icon represents, you can hover over it with your mouse and the name will pop up as a tool-tip.

![Portfolio detail of techs used on project](./readme_images/portfolio_techs.jpg)

Once you click on the project, a modal dialog with open asking if you want to visit the live site or check under the hood with the GitHub code. Take your pick and be spirited away. NOTE: for projects I've included that don't have any connection to GitHub, clicking on the project will take you directly to the YouTube page where those projects are housed.

![Detail on choosing Live or GitHub](./readme_images/live_or_git.jpg)

In the navigation bar at the top you have other options to look at. 

- **Contact Me**: This opens up a contact page with links to my GitHub, LinkedIn, and a Contact Form. Fill out the form with valid information and a message will be sent. 

![contact form detail](./readme_images/contact_me_detail.jpg)

- **About Me**: The brief for this assignment calls for a separate About Me page, so I added more about me. When you click here you'll find some more thoughts from me as well as a small image gallery to give you an idea of who I am and what I like to do.

![about me page screenshot](./readme_images/about_me_screen.jpg)

- **Resume**: Click here and you'll be taken to an online version of my resume for you to look over. If you'd like your own copy, there's a link at the top of the page for a PDF version of my resume you can then download.
    
![resume screenshot](./readme_images/resume_screen.jpg)

___


## Changes Made and Lessons Learned

- Version 2 of my portfolio was already a fairly large construction. Reformatting it for React was daunting. That was almost enought to make me start from scratch. But at the end of the day I decided to simply break it down into smaller pieces until it made sense. Once I broke down the page into separate components, it became clear where I needed to go. Deconstructing Version 2 became easy at that point. The challenge was still making it work in React.

- Formatting everything to take advantage of React was a lesson in patience. Apart from the pain of replacing every `class` declaration with `className`, there were a lot of tiny details that tripped me up. At the end of the day I got the page back working as intended and even added some more bells and whistles. However, some things are still not working as intended.

- My original coffee animation is not working. I've hammered at it for quite some time and have gone to multiple online and in-person resources for help and so far no one has been able to get it to work as intended. I'll have to keep trying new things until I finally find what's not working. Fortunately, while I like the animation and I feel it ties the site theme together, it's not necessary for full function.

 ___

## Possible Future Changes

- Fix DOM and canvas animations
- Learn and use SASS to add my colors to Bootstrap variables.
- Deconstruct Bootstrap to only use a serve elements I'm using on the site
___



## Credits
Thanks to all the UT-Austin Full-Stack Bootcamp for helping push me and giving me feedback and support on my projects.

___


## License

MIT License

Copyright (c) 2022 Mark Gardner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
