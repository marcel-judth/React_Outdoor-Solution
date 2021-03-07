import React from 'react';
import styled from 'styled-components';

function Project({ image, altText, text, setImage, setCaption }) {
  const onImageClick = (e) => {
    setImage(image);
    setCaption(text);
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal img');

    modal.classList.add('open');
    modalImg.classList.add('open');
  };

  return (
    <div className="gallery-item">
      <img src={image} loading="lazy" alt={altText} onClick={onImageClick} />
      <div className="gallery-item-text-wrapper">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Project;
