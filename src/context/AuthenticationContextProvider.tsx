import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

import type { AuthenticationContextParams } from './types';

const defaultAuthenticationContext: AuthenticationContextParams = {
  currentUser: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentUser: (user: string) => {},
};

export const AuthenticationContext = createContext(defaultAuthenticationContext);

const AuthenticationContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(defaultAuthenticationContext.currentUser);

  return (
    <AuthenticationContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
