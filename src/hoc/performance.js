import React, { useEffect } from 'react';

const withPerformance = Component => {
  return props => {
    useEffect(() => {
      console.log('performance');
      window.wv.customContentfulPaint();
    }, []);

    return <Component {...props} />;
  };
};

export default withPerformance;
