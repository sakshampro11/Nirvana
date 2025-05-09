import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA39F-ZH7BDgitXfhfoOW14T-BVqAOLXdI",
  authDomain: "lokally-487f8.firebaseapp.com",
  projectId: "lokally-487f8",
  storageBucket: "lokally-487f8.firebasestorage.app",
  messagingSenderId: "854921628904",
  appId: "1:854921628904:web:c489f729bdbffe33c84d5d",
  measurementId: "G-D462WC9G6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 