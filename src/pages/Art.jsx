import React from 'react';
import '../App.scss';
import '../Art.scss';
import { Angel, BlurryL, BlurrySage, Gothic, Tomb, Tree, Vents } from '../filmfoto';

const images = [
  { image: Angel,
    text: 'boo'
  },
  { image: BlurryL,
    text: 'L'
  }, 
  { image: BlurrySage,
    text: 'Sage at Singing Sands recording studio'
  },
  {image: Gothic,
   text: 'something'
  },
  { image: Tomb,
    text: 'gfgf'
  },
  { image: Tree,
    text: 'etc'
  },
  { image: Vents,
    text: 'f'
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