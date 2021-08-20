import classes from './Auth.module.css';
import  {authActions} from '../store/Auth'
import { useSelector,useDispatch } from 'react-redux';

const Auth = () => {
 

  const dispatch = useDispatch();
  const onLogin= (event)=>{
       event.preventDefault();
       ;debugger
    dispatch(authActions.login())
  }
 
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type="submit" >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
