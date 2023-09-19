import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDNXtyWfgcrJQ_67Vgmwf7RVcdL-8nYkmg',
  authDomain: 'discord-clone-27b05.firebaseapp.com',
  projectId: 'discord-clone-27b05',
  storageBucket: 'discord-clone-27b05.appspot.com',
  messagingSenderId: '225270431366',
  appId: '1:225270431366:web:d5928f22475c39c4429b07',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // DBにアクセス(初期化)
const auth = getAuth(app); // 認証
const provider = new GoogleAuthProvider(); // Google認証

export { auth, provider, db };
