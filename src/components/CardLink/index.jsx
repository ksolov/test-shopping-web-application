import React from 'react';
import PropTypes from 'prop-types';

class CardLink extends React.PureComponent {
  static propTypes = {
    amount: PropTypes.array,
    onClick: PropTypes.func.isRequired
  };

  handleClick = () => {
    if (this.props.amount > 0) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <a href='#' onClick={this.handleClick}>Card: {this.props.amount} items</a>
    );
  }
}

export default CardLink;
