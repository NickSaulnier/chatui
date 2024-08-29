import { createContext, useCallback, useState } from 'react';
import type { ReactNode } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { firebaseApp } from '../database/firebaseConfig';
import type { AuthenticationContextParams } from './types';

const defaultAuthenticationContext: AuthenticationContextParams = {
  currentUser: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createUser: (email: string, password: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (email: string, password: string) => {},
  logout: () => {},
};

export const AuthenticationContext = createContext(defaultAuthenticationContext);

const AuthenticationContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(defaultAuthenticationContext.currentUser);

  const createUser = useCallback(
    async (email: string, password: string) => {
      const auth = getAuth(firebaseApp);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential);
    },
    [setCurrentUser],
  );

  const login = useCallback(async (email: string, password: string) => {
    const auth = getAuth(firebaseApp);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setCurrentUser(userCredential);
  }, []);

  const logout = useCallback(async () => {
    const auth = getAuth(firebaseApp);
    await signOut(auth);
    setCurrentUser(null);
  }, [setCurrentUser]);

  return (
    <AuthenticationContext.Provider value={{ currentUser, createUser, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
