import React from 'react';

import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(SignedIn);