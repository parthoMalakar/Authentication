import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId:process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyCbKKaS5rFoj2TEJLHexQ7LwoBAaOnEwqY",
    authDomain: "auth-development-4cbac.firebaseapp.com",
    projectId: "auth-development-4cbac",
    storageBucket: "auth-development-4cbac.appspot.com",
    messagingSenderId: "864258779017",
    appId: "1:864258779017:web:93d74d7e1459992986a358"

    
});

export const auth = app.auth();
export default app;