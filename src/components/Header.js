import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/Auth'

const Header = () => {

  ; debugger
  const authStatus = useSelector(state => state.authReducer.isAuth)
  const dispatch = useDispatch();
  console.log('İSAUTH' + authStatus);
  const onLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authStatus && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>

      </nav>}

    </header>
  );
};

export default Header;
