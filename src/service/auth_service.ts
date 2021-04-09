import firebase from "firebase";
import firebaseApp from "./firebase";

type AuthProvier = 'GoogleAuthProvider' | 'GithubAuthProvider';

export interface IAuthService {
    login:(params:string | null) => Promise<firebase.auth.UserCredential>
}
class AuthService implements IAuthService {
    login (providerName: string | null) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider` as AuthProvier]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;