import React from 'react';
import '../App.scss';
import '../Art.scss';
import { BlurryL, BlurrySage } from '../filmfoto';

const images = [BlurryL, BlurrySage]
console.log(images)
// let images = import({ BlurryL from filmfoto' } );
const imageList = images.keys().map(image => images(image));


// const s3Uri = 's3://arn:aws:s3:us-west-2:095758704663:accesspoint/foto-access'


function Art() {
  return (
    <div className='Art'>

      {imageList.map((image, index) => (
        <img key={index} src={image} alt={`${index}`} />
      ))}
    </div>
  );
}

export default Art;