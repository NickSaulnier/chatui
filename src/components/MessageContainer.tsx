import { Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';

import { useContext } from 'react';
import { MessageContext } from '../context/MessageContextProvider';
import { ChatMessage } from './ChatMessage';
import { Agent } from '../context/types';
import { MD_WINDOW_WIDTH } from './constants';

export function MessageContainer() {
  const { getCurrentConversation } = useContext(MessageContext);
  const currentConversation = getCurrentConversation();

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
        [theme.breakpoints.up('sm')]: {
          width: `${MD_WINDOW_WIDTH}px`,
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
        {currentConversation?.messages.map((message) => (
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
