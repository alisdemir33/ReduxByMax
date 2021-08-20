
import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from './Counter';
import authReducer  from './Auth';

const store = configureStore(
    {
        reducer: {
          counterReducer:  counterReducer,
          authReducer: authReducer
        }
    });   


export default store;

