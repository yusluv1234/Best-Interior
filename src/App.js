import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header-component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

const mapDistpatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDistpatchToProps)(App);
