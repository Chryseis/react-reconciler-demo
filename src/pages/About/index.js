/*
 * Created by Allen on 2021-10-11
 */
import React from 'react';
import { useHistory } from 'react-router';
import './index.css';

function About({ history }) {
  console.log(history);

  return (
    <div className='about' onClick={() => history.push('/summary')}>
      About
    </div>
  );
}

export default About;