import app from 'firebase/app';
import 'firebase/auth';

// Firebase configuration Settings
const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_DEV_APP_ID,
};

// Your web app's Firebase configuration
var prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PROD_APP_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
  constructor(){
    // Initialize Firebase
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // ***auth API***
  doCreateUserWithEmailandPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSigninWithEmailandPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doResetPassword = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;