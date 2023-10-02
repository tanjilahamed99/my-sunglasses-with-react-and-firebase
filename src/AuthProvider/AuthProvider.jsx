import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from '../Firebase-config/FirebaseConfig';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const authData = {
        googleLogin,

    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};



AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;