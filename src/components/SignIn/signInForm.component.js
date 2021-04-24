import React from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils';
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

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="justify-content-center">
                <h3>Already have an account</h3>
                <form className="mt-4" onSubmit={this.handleSubmit}>
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
                    <button type="submit"
                        onClick={signInWithGoogle}
                        className="btn btn-primary m-2" >
                        <CgGoogle className="google" />
                    </button>

                </form>
            </div>
        );
    }
}

export default SignIn;