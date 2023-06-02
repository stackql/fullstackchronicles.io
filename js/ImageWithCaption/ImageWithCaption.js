import React from 'react';

const ImageWithCaption = ({ imageSrc, altText }) => {
  return (
    <figure>
      <a href={imageSrc}>
      <img src={imageSrc} 
        alt={altText} />
      </a>  
      <figcaption className="figure-caption">
        {altText}
      </figcaption>
    </figure>
  );
}

export default ImageWithCaption;