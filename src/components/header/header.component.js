import React from 'react';

import { auth } from '../../firebase/firebase.utils';
import { ImExit } from 'react-icons/im';
import './header.styles.css';

function Header({ currentUser }) {
    return (
        <div className="text-center">
            <nav className="navbar navbar-light bg-dark" style={{
                borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px"
            }}
            >
                <a className="navbar-brand text-light" href="/">SignIn</a>
                {
                    currentUser ?
                        <div className="text-light point" onClick={() => auth.signOut()}>
                            <span className="mr-1">{currentUser.displayName}</span><ImExit />
                        </div>
                        :
                        <div></div>
                }
            </nav>
        </div>

    );
}

export default Header;