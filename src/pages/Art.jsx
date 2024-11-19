import React from 'react';
import '../App.scss';
import '../Art.scss';
import { BlurryL, BlurrySage, Gothic } from '../filmfoto';

const images = [
  { image: BlurryL,
    text: 'L'
  }, 
  { image: BlurrySage,
    text: 'Sage at Singing Sands recording studio'
  }
]
console.log(images)
// let images = import({ BlurryL from filmfoto' } );
// const imageList = images.map((e, idx) =>

// );


// const s3Uri = 's3://arn:aws:s3:us-west-2:095758704663:accesspoint/foto-access'


function Art() {
  return (
    <div className='main-body Art'>
      
      {images.map((image, index) => (
        <img key={index} src={image.image} alt={`${image.text}`} />
      ))}
    </div>
  );
}

export default Art;