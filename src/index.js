import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

//   // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAhaNMRFHGmtYlpur2XCyP-t5pL1sTLzQE",
    authDomain: "cart-fca1c.firebaseapp.com",
    projectId: "cart-fca1c",
    storageBucket: "cart-fca1c.appspot.com",
    messagingSenderId: "477802643222",
    appId: "1:477802643222:web:39f6bb0340d7fdff21da37"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

