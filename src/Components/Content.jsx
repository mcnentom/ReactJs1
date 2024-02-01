import React, { useContext } from 'react';
import { userContext } from './Main';
import './styling.css'

const Content = () => {
  const { state, dispatch } = useContext(userContext);

  const handleAddToCart = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleRemoveFromCart = () => {
    dispatch({ type: 'DECREMENT' });
  };


  return (
    <div className='content-div'>
      <h2>{state.product ? state.product.name : 'Loading...'}</h2>
      <p className='image-div'>{state.product ? <img src={state.product.images[0]} alt="" /> : ''}</p>
      <p>Price: ${state.product ? state.product.price : ''}</p>
      <p></p>
      <button onClick={handleRemoveFromCart}>-</button>
      <span> -/+</span>
      <button onClick={handleAddToCart}>+</button>
    </div>
  );
};

export default Content;