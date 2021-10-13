/*
 * Created by Allen on 2021-10-11
 */
import React, { useEffect } from 'react';
import './index.css';
import axios from 'axios';

const request = axios.create();

const User = () => {
  useEffect(() => {
    console.log('user');
    request
      .get(
        'https://76f49b91-f08e-4f2e-a611-3152b3384631.mock.pstmn.io/performance/getMetricsTrendList?startDate=2021-08-17%2000:00:00&endDate=2021-08-17%2023:00:00&projectId=10&href=http://www.baidu.com',
        {
          params: {
            startDate: '2021-08-11 09:00:00',
            endDate: '2021-08-11 23:00:00',
            projectId: 10
          },
          withCredentials: false
        }
      )
      .then(data => {
        console.log(data);
      });
  }, []);

  return <div className='user-name'>Allen</div>;
};

const Major = () => {
  return <div className='major'>engineer</div>;
};

function About({ history }) {
  useEffect(() => {
    console.log('about');
  }, []);

  return (
    <div className='about' onClick={() => history.push('/summary')}>
      About
      <User />
      <Major />
    </div>
  );
}

export default About;
