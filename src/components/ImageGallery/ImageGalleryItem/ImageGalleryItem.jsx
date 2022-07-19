import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, smallImg, description, openModal }) => {
  return (
    <Item>
      <Image src={smallImg} alt={description} id={id} onClick={openModal} />
    </Item>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
