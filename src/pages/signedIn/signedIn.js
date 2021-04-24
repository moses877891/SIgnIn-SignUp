import React from 'react';
import './signedin.styles.css';
import logo from '../../logo.svg';

const SignedIn = ({ currentUser }) => {
    return (
        <div className="text-center title">
            <h2>Welcome
            <span className="text-danger"> {currentUser.displayName}</span></h2>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default SignedIn;