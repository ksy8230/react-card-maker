import { UserType } from './../components/login/login';
import firebase from "firebase";
import firebaseApp from "./firebase";

type AuthProvier = 'GoogleAuthProvider' | 'GithubAuthProvider';

type OnUserChangedType = {
    (user: UserType) : void
}
export interface IAuthService {
    login:(params:string | null) => Promise<firebase.auth.UserCredential>
    onAuthChange:(params: OnUserChangedType) => void
    logout:() => void
}
class AuthService implements IAuthService {
    login (providerName: string | null) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider` as AuthProvier]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    onAuthChange(onUserChanged:(user:UserType) => void) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user!);
        });
    }

    logout() {
        firebase.auth().signOut()
    }
}

export default AuthService;