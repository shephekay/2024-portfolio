import React from "react";
import '../App.scss';
import FlipCard from "./FlipCard";

const projects = [
    {
      title: 'This Portfolio',
      imageUrl: '/assets/portfolio.png',
      description: "What you're looking at right now, a portfolio site for my software projects and photography. This site was made with React, Vite, and SCSS, and is hosted on Vercel.",
      links: ['https://sheila-kelley.com/', 'https://github.com/shephekay/2024-portfolio']
    },
    {
        title: "Sheila's Best of Portland",
        imageUrl: '/assets/places.png',
        description: 'This full-stack application is a collection of my favorite places in Portland, and lets users add and edit their own. Built with React, Node.js, MongoDB, Mongoose, Express, and Vanilla CSS, it has full CRUD functioning, and adheres to RESTful architecture and the MVC file structure. Hosted with Render - allow a few seconds of latency as Render spins down the site with inactivity.',
        links: ['https://places-app-2025.onrender.com/', 'https://github.com/shephekay/places-app-2025']
    },
    {
        title: 'Complaints to NYPD',
        imageUrl: '/assets/complaints.png',
        description: "Using the NYPD Complaint Data API from NYC Opendata, this project shows the most recent complaints to NYPD from the selected borough, and the police's response. Made with HTML, CSS, Javascript, and jQuery in 2020.",
        links: ['https://shephe.github.io/complaints/', 'https://github.com/shephekay/complaints-reboot']
    },
    {
        title: 'Mushroom Hunt',
        imageUrl: '/assets/mushroom.png',
        description: 'A simple browser game made with just HTML, CSS, Javascript, and jQuery, also from 2020. One of the very first coding projects I ever made! Two players alternate turns clicking the board trying to gather as many mushrooms as they can while avoiding the Death Cap.',
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