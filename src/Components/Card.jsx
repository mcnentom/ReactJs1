import React, { useContext } from 'react';
import { userContext } from './Main';
import './styling.css'

const Card = () => {
  const { state } = useContext(userContext);

  return (
    <div className='myCard'>
      <h2>Cart</h2>
      <span><strong>Items Count : </strong> {state.count}</span>
      
    </div>
  );
};

export default Card;