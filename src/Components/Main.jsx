import React, { useReducer, useEffect,useState } from 'react';
import { createContext } from 'react';
import Content from './Content';
import Card from './Card';
import Navbar from './Navbar';

export const userContext = createContext();

const initialState = {
  product: null,
  count: 0,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return { ...state, product: action.payload };
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    default:
      throw new Error('Invalid action type');
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isCardVisible, setCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        dispatch({ type: 'SET_PRODUCT', payload: jsonData });
      } catch (err) {
        console.log('error', err);
      }
    };

    fetchData();
  }, []);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <div>
      <Navbar toggleCard={toggleCardVisibility} />
      {isCardVisible && <Card />}
        <Content />

      </div>
    </userContext.Provider>
  );
};

export default Main;