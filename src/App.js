import React from 'react';

import Header from "./components/header/header.component";
import SignInSignUp from './pages/signIn&signUp.component';
import SignedIn from './pages/signedIn/signedIn';
import { auth, createuserProfileDocument } from './firebase/firebase.utils';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createuserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        {
          !this.state.currentUser ? (<SignInSignUp />)
            :
            <SignedIn currentUser={this.state.currentUser} />
        }
      </div>
    );
  }
}

export default App;
