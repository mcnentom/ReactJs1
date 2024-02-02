import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { userContext } from './Main';
import './styling.css';

const Navbar = ({ toggleCard }) => {
  const { state } = useContext(userContext);


  return (
    <div className='general'>
      <FaShoppingCart onClick={toggleCard} />
      <p onClick={toggleCard}>Count : {state.count}</p>

    </div>
  );
};

export default Navbar;
