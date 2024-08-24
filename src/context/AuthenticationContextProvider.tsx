import { createContext, useCallback, useState } from 'react';
import type { ReactNode } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { firebaseApp } from '../database/firebaseConfig';
import type { AuthenticationContextParams } from './types';

const defaultAuthenticationContext: AuthenticationContextParams = {
  currentUser: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createUser: (email: string, password: string) => {},
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

  return (
    <AuthenticationContext.Provider value={{ currentUser, createUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
