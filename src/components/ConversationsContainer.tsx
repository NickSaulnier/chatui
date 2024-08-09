import { Box, List } from '@mui/material';
import { useContext } from 'react';

import { MessageContext } from '../context/MessageContextProvider';
import { Conversation } from './Conversation';

export function ConversationsContainer() {
  const { conversations } = useContext(MessageContext);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={(theme) => ({
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
        <List
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {conversations.map((conversation, index) => (
            <Conversation key={`conversation-${index}`} conversation={conversation} index={index} />
          ))}
        </List>
      </Box>
    </Box>
  );
}
