import PropTypes from 'prop-types';
import Button from 'components/Button';
import ImageGalleryItem from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick, loadMore }) => {
  return (
    <>
      <List>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            smallImg={webformatURL}
            description={tags}
            openModal={() => onImageClick(largeImageURL)}
          />
        ))}
      </List>
      {images.length > 0 && <Button onClick={loadMore} />}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
  loadMore: PropTypes.func,
};
