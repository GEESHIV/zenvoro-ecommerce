import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "zenvoro-ecommerce.firebaseapp.com",
  databaseURL: "https://zenvoro-ecommerce-default-rtdb.firebaseio.com",
  projectId: "zenvoro-ecommerce",
  storageBucket: "zenvoro-ecommerce.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);