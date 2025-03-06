import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import '../App.scss';

const FlipCard = ({ imageUrl, title, description, links }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

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

          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;