import { initializeApp } from 'firebase/app';

const initializeFirebaseApp = () => {
  return initializeApp({
    apiKey: "AIzaSyAMiW3uLvcV-CPY7n1CC-elRyrca0GPeYw",
    authDomain: "vue-ts-demo.firebaseapp.com",
    projectId: "vue-ts-demo",
    storageBucket: "vue-ts-demo.appspot.com",
    messagingSenderId: "96956444586",
    appId: "1:96956444586:web:b93af89fad8452378b85d3",
  });
};

export default initializeFirebaseApp;
