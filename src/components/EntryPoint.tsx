import { ThemeProvider } from '@mui/material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import React from 'react';
import { TopBar } from './TopBar';
import { ChatContainer } from './ChatContainer';
import { customTheme } from '../theme/theme';
import MessageContextProvider from '../context/MessageContextProvider';
import { mockConversation } from '../context/MockMessageContextData';

export function EntryPoint() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <MessageContextProvider inputConversations={mockConversation}>
          <TopBar Icon={RequestQuoteIcon} />
          <ChatContainer />
        </MessageContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
