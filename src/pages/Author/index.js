import React from 'react';
import withPerformance from '../../hoc/performance';

class Author extends React.Component {
  render() {
    return <div>Author</div>;
  }
}

export default withPerformance(Author);
