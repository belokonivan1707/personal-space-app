/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authContext = createContext({} as any);
const emailAlreadyUse = 'The email address is already in use by another account.';
const wrongPassword = 'auth/wrong-password';
const manyRequest = 'auth/too-many-requests';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ProvideAuth({ children }: any) {
  const auth: unknown = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<unknown>(() => localStorage.getItem('personal-space/auth'));

  const signin = (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return 'success';
      })
      .catch(error => {
        const { code } = error;
        if (code === wrongPassword) {
          return 'wrong password';
        }
        if (code === manyRequest) {
          return 'many request';
        }
        return false;
      });
  };

  const signup = (email: string, password: string) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response: any) => {
        setUser(response.user);
        return 'success';
      })
      .catch(error => {
        const { message } = error;
        if (message === emailAlreadyUse) {
          return 'email';
        }

        return false;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  const sendPasswordResetEmail = (email: string) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code: string, password: string) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user: unknown) => {
      if (user) {
        setUser(user);
        localStorage.setItem('personal-space/auth', 'true');
      } else {
        localStorage.removeItem('auth');
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
