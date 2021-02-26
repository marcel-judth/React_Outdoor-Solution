import React from 'react';

function Project({ image, altText, text }) {
  return (
    <div className="gallery-item">
      <img src={image} alt={altText} />
      <div className="gallery-item-text-wrapper">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Project;
