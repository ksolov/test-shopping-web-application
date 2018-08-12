import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPhones } from '../../../actions/phones';
import { addPhoneToCard } from '../../../actions/card';
import PhonesList from '../../../components/PhonesList';

class Search extends React.Component {
  static propTypes = {
    loadPhones: PropTypes.func.isRequired,
    onOrder: PropTypes.func.isRequired,
    phones: PropTypes.array
  };

  state = {
    pnones: this.props.phones
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.phones !== prevState.phones) {
      return {
        phones: nextProps.phones
      };
    }
    return null;
  }

  componentDidMount() {
    if (!this.props.phones.length) {
      this.props.loadPhones();
    }
  }

  handleOrder = (phone) => {
    this.props.onOrder(phone);
  };

  render() {
    return (
      <main>
        <PhonesList onOrder={this.handleOrder} phones={this.state.phones} />
      </main>
    );
  }
}

const mapStateToProps = ({ phones }) => ({
  phones: phones.phones
});

const mapDispatchToProps = {
  loadPhones,
  onOrder: addPhoneToCard
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
