import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import CardLink from '../../components/CardLink';
import CardModal from '../../components/CardModal';

class Card extends React.PureComponent {
  static propTypes = {
    phones: PropTypes.array
  };

  state = {
    isOpen: false
  };

  handleToggleCard = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { phones } = this.props;
    return (
      <React.Fragment>
        <CardLink onClick={this.handleToggleCard} amount={phones.length} />
        <CardModal isShow={this.state.isOpen} onHide={this.handleToggleCard} phones={phones} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ card }) => ({
  phones: card.phones
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Card);
