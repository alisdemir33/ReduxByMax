import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.counter)
  const isCounterShown = useSelector(state => state.isCounterShown)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => { 
    dispatch({type:'toggle'})
  };

  const onInc= ()=>{
    dispatch({type:'increment'})
  }
  const onDec= ()=>{
    dispatch({type:'decrement'})
  }

  const onIncreaseBy = (value) =>{
    dispatch({ type:'increaseBy', payload:value})
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
