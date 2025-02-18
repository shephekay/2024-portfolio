import '../App.scss';
import React from 'react';

function About() {
  return (
    <div className="About main-body">
      {/* <header className="App-header">
        <h1>Sheila Phedra Kelley</h1>
      </header>
      <div className='body'>
       
       
      </div> */}
      <div className='big-about'>
        <h2>Hi, I'm Sheila.</h2>
        <h3>A multidisciplinary creator and software engineer based in Portland, OR.</h3>
        <p>With experience in full-stack application development, UX design, team management, and analog photography.</p>
      </div>

      <div className='details-about'>
        <p>Creative, innovative, and analytical, I value intuitive functionality and ease of use in both code and product. My knack is coming up with simple, elegant solutions to complex problems.</p>
      </div>
      
    </div>
  );
}

export default About;