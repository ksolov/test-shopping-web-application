import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import PhonesCardList from '../../components/PhonesCardList';

class CardModal extends React.PureComponent {
  static propTypes = {
    isShow: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    phones: PropTypes.array
  };

  handleHide = () => {
    this.props.onHide();
  };

  render() {
    const { phones, isShow } = this.props;
    return (
      <Modal show={isShow} onHide={this.handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Card</Modal.Title>
          <Modal.Body>
            <PhonesCardList phones={phones} />
          </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }
}

export default CardModal;
