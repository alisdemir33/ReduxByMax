import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, isCounterShown: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseBy(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.isCounterShown = !state.isCounterShown;
        }
    }
})



const store = configureStore(
    {
        reducer: counterSlice.reducer
    });
    
export const counterActions =counterSlice.actions; 
export default store;
