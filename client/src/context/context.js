// context.js
import React, { createContext, useEffect, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  loading: false,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_DATA':
      return { ...state, data: { ...state.data, ...action.payload } };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const storedData = JSON.parse(localStorage.getItem('appData'));
  const [state, dispatch] = useReducer(reducer, storedData || initialState);

  useEffect(() => {
    // Update local storage whenever the state changes
    localStorage.setItem('appData', JSON.stringify(state));
  }, [state]);

  const contextValue = {
    loading: state.loading,
    data: state.data,
    dispatch,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
