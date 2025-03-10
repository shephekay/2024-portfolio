import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import '../App.scss';

const FlipCard = ({ imageUrl, title, description, links }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  //prevents card from flipping back over, i.e. "event bubbling" (parent event happening when child is clicked on)
  const handleButtonClick = (event) => {
    event.persist();
    event.stopPropagation();
  }

  return (
    <div className="software-card">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
      >
        {/* Front side */}
        <div
          className="card-front"
          onClick={handleClick}
          style={{
            cursor: "pointer",
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="front"
          />
        </div>
        {/* Back side */}
        <div className="card-back" onClick={handleClick}>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-links">
            {links.map((link, index)=> {
              return (
                <button onClick={handleButtonClick}> 
                <a href={link} target="_blank">{index == 0 ? "Live site" : "See code"}</a>
                </button>
              )
             }
            )} 
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;