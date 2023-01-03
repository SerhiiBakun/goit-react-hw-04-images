import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, alt, openModal }) => {
  return (
    <GalleryItem>
      <GalleryImg src={smallImg} alt={alt} onClick={openModal} />
    </GalleryItem>
  );
};
