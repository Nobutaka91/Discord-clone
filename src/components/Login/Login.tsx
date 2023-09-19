import React from 'react';
import './Login.scss';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

const Login = () => {
  const signIn = () => {
    // Firebaseを使ったGoogleログイン機能
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button className="button" onClick={signIn}>
        ログイン
      </Button>
    </div>
  );
};

export default Login;
