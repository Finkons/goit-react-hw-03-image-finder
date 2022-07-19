import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onClickEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClickEscape);
  }

  onClickEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onClickOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { activeUrl, alt, onClose } = this.props;
    return createPortal(
      <Overlay onClick={this.onClickOverlay}>
        <ModalWindow onClick={onClose}>
          <ModalImage src={activeUrl} alt={alt} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
