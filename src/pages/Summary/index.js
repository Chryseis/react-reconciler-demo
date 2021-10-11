/*
 * Created by Allen on 2021-10-11
 */
import React from 'react';
import { useHistory } from 'react-router';
import './index.css';

function Summary() {
  const history = useHistory();
  return (
    <div className='summary' onClick={() => history.push('/')}>
      Summary
    </div>
  );
}

export default Summary;
