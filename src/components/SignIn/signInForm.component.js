import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { CgGoogle } from 'react-icons/cg';

import './signIn.styles.css';

class SignIn extends React.Component {

    state = {
        email: '',
        password: '',
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '', });
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        return (
            <div className="justify-content-center">
                <h3>Already have an account</h3>
                <span>Sign-In with e-mail & password</span>
                <form className="my-4" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label" htmlFor="email">
                            Email:</label>
                        <input
                            className="form-control col-12 col-sm-8"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter E-mail"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="password">
                            password:</label>
                        <input
                            className="form-control col-12 col-sm-8"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />

                    </div>
                    <input type="submit"
                        value="SignIn"
                        className="btn btn-dark" />
                </form>
                <button type="submit"
                    onClick={signInWithGoogle}
                    className="btn btn-primary float" >
                    <CgGoogle className="google" />
                </button>
            </div>
        );
    }
}

export default SignIn;