import '../App.scss';
import '../Art.scss';

// const images = require.context('../filmfoto', true);


const images = import('../filmfoto')
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