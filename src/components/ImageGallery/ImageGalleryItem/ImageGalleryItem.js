import PropTypes from 'prop-types';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, alt, openModal }) => {
  return (
    <GalleryItem>
      <GalleryImg src={smallImg} alt={alt} onClick={openModal} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string,
  alt: PropTypes.string,
  openModal: PropTypes.func,
};
