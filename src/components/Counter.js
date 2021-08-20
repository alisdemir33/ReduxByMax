import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {counterActions} from '../store/index'

const Counter = () => {

  const counter = useSelector(state => state.counter)
  const isCounterShown = useSelector(state => state.isCounterShown)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggle())
  };

  const onInc= ()=>{
    dispatch(counterActions.increment())
  }
  const onDec= ()=>{
    dispatch(counterActions.decrement())
  }

  const onIncreaseBy = (value) =>{
    dispatch(counterActions.increaseBy(5))
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {isCounterShown && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onInc}>Increment</button>
        <button onClick={() => onIncreaseBy(5)}>Increase By Five</button>
        <button onClick={onDec}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
