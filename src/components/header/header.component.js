import React from 'react';

import { auth } from '../../firebase/firebase.utils';
import './header.styles.css';

function Header({ currentUser }) {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-light bg-dark" style={{
                borderBottomRightRadius: "1.3rem", borderBottomLeftRadius: "1.3rem"
            }}
            >
                <a className="navbar-brand text-light" href="/">SignIn</a>
                {
                    currentUser ?
                        <div className="text-light point" onClick={() => auth.signOut()}>EXIT</div>
                        :
                        <div></div>
                }
            </nav>

        </div>

    );
}

export default Header;