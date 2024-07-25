import { Box, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useContext } from 'react';

import { MessageContext } from '../context/MessageContextProvider';
import { Conversation } from './Conversation';

export function ConversationsContainer() {
  const { conversations } = useContext(MessageContext);

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
      }}
    >
      <List sx={{ width: '100%' }}>
        {conversations.map((conversation, index) => (
          <Conversation conversation={conversation} index={index} />
        ))}
      </List>
    </Box>
  );
}
