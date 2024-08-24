// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCdSICs-wuLx_GaVS9fRD_cAVWF9gEMhyE',
  authDomain: 'chatui-f751b.firebaseapp.com',
  projectId: 'chatui-f751b',
  storageBucket: 'chatui-f751b.appspot.com',
  messagingSenderId: '787642561218',
  appId: '1:787642561218:web:b655cdc36739f5b927c15b',
  measurementId: 'G-HPS88GM215',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(firebaseApp);
