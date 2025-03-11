import React from 'react';
import '../App.scss';
import '../Art.scss';
import { Angel, Gothic, Castle, Toro, Tomb, Tree, Vents, Prague } from '../filmfoto';

const images = [
  {
    image: Prague,
    text: ''
  },
  {
    image: Castle,
    text: ''
  },
  {
    image: Toro,
    text: ''
  },
  { 
    image: Angel,
    text: ''
  },
  {
    image: Gothic,
    text: ''
  },
  {
    image: Tomb,
    text: ''
  },
  {
    image: Tree,
    text: ''
  },
  { 
    image: Vents,
    text: ''
  },

]
// let images = import({ BlurryL from filmfoto' } );
// const imageList = images.map((e, idx) =>

// );


// const s3Uri = 's3://arn:aws:s3:us-west-2:095758704663:accesspoint/foto-access'


function Art() {
  return (
    <div className='main-body Art'>
      <div className='photos-container'>
        {images.map((image, index) => (
          <div className='photo-card'>
            <img className='film-photo' key={index} src={image.image} alt={`${image.text}`} />
            <body className='photo-text'>
              {`${image.text}`}
            </body>
          </div>

        
      ))}
      </div>
      
    </div>
  );
}

export default Art;