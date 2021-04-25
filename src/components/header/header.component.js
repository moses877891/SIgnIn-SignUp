import React from 'react';

import { connect } from 'react-redux';

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
                    currentUser.userAuth === 1 ?
                        <div></div>
                        :
                        <div className="text-light point" onClick={() => auth.signOut()}>
                            <span className="mr-1">{currentUser.displayName}</span><ImExit />
                        </div>
                }
            </nav>
        </div>

    );
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps)(Header);