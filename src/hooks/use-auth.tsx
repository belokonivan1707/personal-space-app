/* eslint-disable no-shadow */
import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyBP0HRebomd9AKeyjc-nAfG-t7sDGEqots',
  authDomain: 'personal-space-9112a.firebaseapp.com',
  databaseURL: 'https://personal-space-9112a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'personal-space-9112a',
  storageBucket: 'personal-space-9112a.appspot.com',
  messagingSenderId: '96800415640',
  appId: '1:96800415640:web:64c89128320e2b80bdd5ed',
  measurementId: 'G-Y8ED4KN596',
});

const authContext = createContext({} as any);
const emailAlreadyUse = 'The email address is already in use by another account.';
const wrongPassword = 'auth/wrong-password';
const manyRequest = 'auth/too-many-requests';

export function ProvideAuth({ children }: any) {
  const auth: any = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<any>(null);

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
      } else {
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
