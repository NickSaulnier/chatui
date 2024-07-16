import { Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';

import { INPUT_BORDER_RADIUS } from './constants';
import { useContext } from 'react';
import { MessageContext } from '../context/MessageContextProvider';
import { ChatMessage } from './ChatMessage';
import { Agent } from '../context/types';

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
