import React from 'react';

import { auth, createuserProfileDocument } from '../../firebase/firebase.utils';
import './signup.styles.css';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmpassword } = this.state;
        if (password !== confirmpassword) {
            alert("password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createuserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
            })
        } catch (error) {
            alert(error.message);
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="align-items-center">
                <h3>Don't have an account?</h3>
                <span>create an account using e-mail & password</span>
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-group">
                        <label htmlFor="displayName">displayName:</label>
                        <input
                            className="form-control col-12 col-sm-8"
                            type="text"
                            id="displayName"
                            name="displayName"
                            placeholder="Name"
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="email2">Email:</label>
                        <input
                            className="form-control col-12 col-sm-8"
                            type="email"
                            id="email2"
                            name="email"
                            placeholder="Enter E-mail"
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">password:</label>
                        <input
                            className="form-control col-12 col-sm-8"
                            type="password"
                            id="password2"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmpassword">Re-Enter password:</label>
                        <input
                            className="form-control col-12 col-sm-8"
                            type="password"
                            id="confirmpassword"
                            name="confirmpassword"
                            placeholder="confirm-Password"
                            onChange={this.handleChange}
                        />

                    </div>
                    <input type="submit"
                        value="SignUp"
                        className="btn btn-dark col-8 col-sm-4" />
                </form>
            </div>
        )
    }
}

export default SignUp;