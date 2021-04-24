import React from 'react';

import SignIn from '../components/SignIn/signInForm.component';
import SignUp from '../components/signup/signup.component';
import './sign.in.styles.css';

class SignInSignUp extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row ml-5">
                    <div className="col-6 col-md-6">
                        <SignIn />
                    </div>
                    <div className='col-6 col-md-6'>
                        <SignUp />
                    </div>
                </div>

            </div>
        );
    }

}

export default SignInSignUp;