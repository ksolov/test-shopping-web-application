import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../utils/cn';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

@cn('meetings')
class Search extends React.Component {
  static propTypes = {
  };

  render(cn) {
    return (
      <main className={cn()}>
        Search
      </main>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
