import React, { useContext } from 'react';
import { userContext } from './Main';

const Card = () => {
  const { state } = useContext(userContext);

  return (
    <div>
      <h2>Cart</h2>
      <span><strong>Items Count</strong></span>
      <p>{state.count}</p>
    </div>
  );
};

export default Card;