import React from "react";
import '../App.scss';
import FlipCard from "./FlipCard";

const projects = [
    {
        title: "Sheila's Best of Portland",
        imageUrl: 'src/assets/places.png',
        description: 'placeholder placeholder placehoplder',
        links: []
    },
    {
        title: 'Complaints to NYPD',
        imageUrl: 'src/assets/complaints.png',
        description: 'placeholder blahhhhh',
        links: []
    },
    {
        title: 'Mushroom Hunt',
        imageUrl: 'src/assets/mushroom.png',
        description: 'A simple browser game',
        links: []
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
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default FlipCardContainer;