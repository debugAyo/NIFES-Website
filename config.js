/**
 * NIFES FUTMinna Firebase Configuration
 * 
 * To make the Admin Dashboard work online:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project (e.g., "nifes-futminna").
 * 3. Add a Web App to your project.
 * 4. Enable "Firebase Authentication" (with Email/Password provider).
 * 5. Enable "Realtime Database" in test mode or with read/write rules.
 * 6. Copy the Firebase config object keys and paste them below.
 */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase if config is set up
let app, db, auth;
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  app = firebase.initializeApp(firebaseConfig);
  db = firebase.database();
  auth = firebase.auth();
}
