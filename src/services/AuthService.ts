import {
  getAuth,
  signOut,
  updateEmail,
  updatePassword,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth';

class AuthService {
  static login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  static signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  static logout() {
    return signOut(this.auth);
  }

  static changePassword(password: string) {
    if (!this.auth?.currentUser) {
      throw new Error('No Auth');
    }

    return updatePassword(this.auth.currentUser, password);
  }

  static changeEmail(email: string) {
    if (!this.auth?.currentUser) {
      throw new Error('No Auth');
    }

    return updateEmail(this.auth.currentUser, email);
  }

  static onAuthChanged(callback: NextOrObserver<User>) {
    return onAuthStateChanged(this.auth, callback);
  }

  static userId() {
    return this.auth.currentUser?.uid;
  }

  static authUser() {
    return this.auth.currentUser;
  }

  static isAuth() {
    return !!this.auth.currentUser;
  }

  static get auth() {
    return getAuth();
  }
}

export default AuthService;
