import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <Gallery>
      {items.map(({ webformatURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImg={webformatURL}
          alt={tags}
          openModal={() => openModal(id)}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array,
  openModal: PropTypes.func,
};
