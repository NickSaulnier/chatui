import { Box, ListItem, ListItemAvatar, ListItemText, useTheme } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

import type { Conversation } from '../context/types';
import { formatTimestamp } from './utils';

type ConversationProps = {
  conversation: Conversation;
  index: number;
};

export function Conversation({ conversation, index }: ConversationProps) {
  const theme = useTheme();

  return (
    <ListItem key={`conversation-${index}`}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '75%' }}>
        <ListItemAvatar sx={{ minWidth: '37px', maxWidth: '37px' }}>
          <ChatIcon />
        </ListItemAvatar>
        <ListItemText
          sx={{
            // Directly style the span on mobile so that a breakpoint can be
            // used for smaller fontSize styling
            '& span': {
              fontSize: '15px',
              [theme.breakpoints.down('sm')]: {
                fontSize: '13px',
              },
            },
          }}
          primaryTypographyProps={{
            color: 'text.secondary',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          primary={conversation.messages[0].content ?? 'Untitled'}
          secondary={formatTimestamp(conversation.messages[0].timestamp) ?? ''}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        hi
      </Box>
    </ListItem>
  );
}
