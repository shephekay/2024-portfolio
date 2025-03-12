import '../App.scss';
import { useState } from 'react';
import FlipCardContainer from '../components/FlipCardContainer'

function Software() {
  // const [isFlipped, setIsFlipped] = useState(false);
  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);
  // };
  return (
    <div className="Software main-body">
      <div className='tech-stack'>
          <div className='tech-section'>
            <h3>Languages</h3>
            <p>Javascript, Java, C#</p>
        
        </div>
        <div className='tech-section'>
          <h3>Technologies</h3>
          <p>React.js, Next.js, Express.js, Ext.js, Redux, SCSS, Bootstrap, Tailwind, HTML, CSS, ASP.NET</p>
          <p>Node.js, .NET, IIS Server, MongoDB, Mongoose, SQL, NoSQL</p>
        </div>
        <div className='tech-section'>
          <h3>Tools</h3>
        <p>Git, GitHub, AWS, Postman, Google Analytics</p>
        </div>
        <div className='tech-section'>
          <h3>Other skills and experience</h3>
        <p>Cybersecurity, SEO, Server Management, Healthcare IT, APIs</p>
        </div>
        
        
      </div>

      <FlipCardContainer />
    
      {/* <div className='container'>
        <div className='card places'>
              <img src='src/assets/places.png'
              className='front'
              // onClick={handleClick}
              ></img>
              <div 
              className='card-content back'
              // onClick={handleClick}
              >
                <h3 className='card-title'>Sheila's Best of Portland</h3>
                <p className='card-description'></p>
                <div className='card-links'>
                  <link></link>
                </div>
              </div>
        </div>

        <div className='card complaints'>
              <img src='src/assets/complaints.png' className='front'></img>
              <div className='card-content back'>
                <h3 className='card-title'>Complaints to NYPD</h3>
                <p className='card-description'></p>
                <div className='card-links'>
                  <link></link>
                </div>
              </div>
        </div>
        <div className='card mushroom'>
              <img src='src/assets/mushroom.png' className='front'></img>
              <div className='card-content back'>
                <h3 className='card-title'>Mushroom Hunt</h3>
                <p className='card-description'>A simple browser game</p>
                <div className='card-links'>
                  <link></link>
                </div>
              </div>
        </div>
      </div> */}
    </div>
  );
}

export default Software;