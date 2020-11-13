import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();

    const routeToOrder = () => {
        history.push('/pizza');
    };

    return (
        <div className='market-section'>
        <div className='greeting'>
          <img className='home-img'
          src=''
          alt='pizza cartoon'/>
          <h1>Your favorite food, delivered while coding</h1>
          <button onClick={routeToOrder} className='btn-to-order'>
              Order
            </button>
        </div>
      </div>
    )
}