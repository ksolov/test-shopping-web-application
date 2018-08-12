import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    this.setState({ query: val });
  };

  render() {
    return (
      <div className="search">
        <input onChange={this.handleChange} value={this.state.query} className="search__input" />
      </div>
    );
  }
}


export default Search;
