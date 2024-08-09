import { Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useContext } from 'react';

import { MessageContext } from '../context/MessageContextProvider';
import { ChatMessage } from './ChatMessage';
import { Agent } from '../context/types';

export function MessageContainer() {
  const { currentMessages } = useContext(MessageContext);

  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        display: 'flex',
        flex: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        margin: `${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)}`,
        overflowY: 'auto',
        scrollbarWidth: 'none', // Hide the scrollbar for firefox
        '&::-webkit-scrollbar': {
          display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
        },
        '&-ms-overflow-style:': {
          display: 'none', // Hide the scrollbar for IE
        },
        [theme.breakpoints.up('sm')]: {
          width: `${theme.breakpoints.values.sm}px`,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          height: '100%',
          width: '100%',
          margin: `${theme.spacing(2)}`,
        })}
      >
        {currentMessages?.map((message) => (
          <ChatMessage
            message={message}
            Icon={message.agent === Agent.User ? PersonIcon : SmartToyIcon}
            key={message.timestamp}
          />
        ))}
      </Box>
    </Box>
  );
}
