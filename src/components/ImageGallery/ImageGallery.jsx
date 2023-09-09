import React from 'react';
import style from './ImageGallery.module.css'

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, openModal }) {
    return (
      <ul className={style.gallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openModal={openModal}
            tags={tags}
          />
        ))}
      </ul>
    );
  }