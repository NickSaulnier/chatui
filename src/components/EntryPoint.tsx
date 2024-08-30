import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { TopBar } from './TopBar';
import { ChatContainer } from './ChatContainer';
import { customTheme } from '../theme/theme';
import MessageContextProvider from '../context/MessageContextProvider';
import { ConversationsContainer } from './ConversationsContainer';
import { OpenAISettings } from './OpenAISettings';
import { ROUTE_LINKS } from './constants';
import SettingsContextProvider from '../context/SettingsContextProvider';
import { Authenticate } from './Authenticate';
import AuthenticationContextProvider from '../context/AuthenticationContextProvider';

export function EntryPoint() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <AuthenticationContextProvider>
          <MessageContextProvider>
            <SettingsContextProvider>
              <Router>
                <TopBar />
                <Routes>
                  <Route path={ROUTE_LINKS[0]} element={<ChatContainer />} />
                  <Route path={ROUTE_LINKS[1]} element={<ConversationsContainer />} />
                  <Route path={ROUTE_LINKS[2]} element={<OpenAISettings />} />
                  <Route path={ROUTE_LINKS[3]} element={<Authenticate />} />
                </Routes>
              </Router>
            </SettingsContextProvider>
          </MessageContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
