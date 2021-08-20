import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import {useSelector} from 'react-redux';
import UserProfile from './components/UserProfile'

function App() {
  const authStatus = useSelector(state => state.authReducer.isAuth);

  return (
    <Fragment>
      <Header/>      
      {!authStatus && <Auth/>}
      {authStatus && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
