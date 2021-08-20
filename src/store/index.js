import {createStore} from 'redux'

const initialState ={counter:0 , isCounterShown:true }

const counterReducer = (state=initialState,action) => {

    if(action.type==='increment' ){
        return{ 
            ...state,
            counter : state.counter+1
        }
    }
    if(action.type ==='decrement'){
        return{
            ...state,
             counter : state.counter-1
            }
    }


    if(action.type ==='increaseBy'){
        return{ 
            ...state,
            counter : state.counter + parseInt(action.payload)
        }
    }

    if(action.type='toggle'){
        return {
            counter:state.counter,
            isCounterShown:!state.isCounterShown
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;
