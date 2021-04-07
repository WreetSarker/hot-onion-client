import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app()
}


const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const userInfo = result.user;
                // setLoggedInUser(user);
                const user = { name: userInfo.displayName, email: userInfo.email }
                console.log(user);
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <h1>Login With</h1>
            <button onClick={handleGoogleSignIn}>Continue with Google</button>
            <p>Don't have an account? <span><Link to="/register">Create an account</Link></span></p>

        </div>
    );
};

const mapStateToProps = state => {
    return {

    }
}

export default Login;

