import React, { Component } from 'react';
import cn from '../../utils/cn';

@cn('no-results')

class NoResults extends Component {
  render(cn) {
    return (
      <div className={cn()}>No search results, try again</div>
    );
  }
}

export default injectIntl(NoResults);

