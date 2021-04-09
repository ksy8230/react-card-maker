import firebase from "firebase";

type AuthProvier = 'GoogleAuthProvider' | 'FacebookAuthProvider';

class AuthService {
    login (providerName: string) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider` as AuthProvier]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;