
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQW1JT-n8zTzo-O4XWptzsk-fo7sxJuiE",
  authDomain: "hermani-35cb7.firebaseapp.com",
  databaseURL: "https://hermani-35cb7-default-rtdb.firebaseio.com", // You'll need to create a Realtime Database and put the URL here
  projectId: "hermani-35cb7",
  storageBucket: "hermani-35cb7.firebasestorage.app",
  messagingSenderId: "317902959153",
  appId: "1:317902959153:web:341536a48ab84a664c9b10",
  measurementId: "G-FH0DP3G1GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

// Initialize Analytics (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };
