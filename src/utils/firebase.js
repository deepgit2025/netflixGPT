import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVni7Ei7KGqwRxG61ZQcfghtuc7IpnblY",
  authDomain: "moviemafia-a43f6.firebaseapp.com",
  projectId: "moviemafia-a43f6",
  storageBucket: "moviemafia-a43f6.firebasestorage.app",
  messagingSenderId: "301445900405",
  appId: "1:301445900405:web:17497d9bffe91db0dfb03c",
  measurementId: "G-2SG17ZCT3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };