import React from "react";
import '../App.scss';
import FlipCard from "./FlipCard";

const projects = [
    {
      title: 'This Portfolio',
      imageUrl: '/assets/portfolio.png',
      description: "What you're looking at right now. A portfolio site for software and photography, showcasing my experience, design, and ability. This site was made with React, Vite, and SCSS, and is hosted on Vercel.",
      links: ['https://sheila-kelley.com/', 'https://github.com/shephekay/2024-portfolio']
    },
    {
        title: "Sheila's Best of Portland",
        imageUrl: '/assets/places.png',
        description: 'placeholder placeholder placehoplder nfdoiuefnjwjr cvnijudcjnuiodsv vdsmndsjivdsojikd svdkmdskmd',
        links: ['https://places-app-2025.onrender.com/', 'https://github.com/shephekay/places-app-2025']
    },
    {
        title: 'Complaints to NYPD',
        imageUrl: '/assets/complaints.png',
        description: 'placeholder blahhhhh',
        links: ['https://shephe.github.io/complaints/', 'https://github.com/shephekay/complaints-reboot']
    },
    {
        title: 'Mushroom Hunt',
        imageUrl: '/assets/mushroom.png',
        description: 'A simple browser game',
        links: ['https://shephe.github.io/mushroom-hunt/', 'https://github.com/shephekay/mushroom-hunt']
    },

]

function FlipCardContainer() {
    return (
      <div className="flip-cards">
        <h1>Applications and Personal Projects</h1>
        <div className="container">
          {projects.map((project, index) => (
            <FlipCard
              key={index}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              links={project.links}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default FlipCardContainer;