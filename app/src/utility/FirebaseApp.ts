import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB_tyN3FolHRHx9GRXw9PSO27r6aUvezYg",
  authDomain: "reality-check-pickleball.firebaseapp.com",
  projectId: "reality-check-pickleball",
  storageBucket: "reality-check-pickleball.firebasestorage.app",
  messagingSenderId: "361363618815",
  appId: "1:361363618815:web:d6afcf837aa8c66e9205ca",
  measurementId: "G-Z6DTK98TR1"
};

export default function firebaseApp() {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApps()[0]; // Return the already initialized app
}