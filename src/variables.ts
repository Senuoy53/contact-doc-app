const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Email Js
const emailJsUser = {
  YOUR_SERVICE_ID: process.env.REACT_APP_YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_YOUR_TEMPLATE_ID,
  YOUR_USER_ID: process.env.REACT_APP_YOUR_USER_ID,
};

export { firebaseConfig, emailJsUser };
