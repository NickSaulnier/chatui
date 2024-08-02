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
    <ListItem
      sx={(theme) => ({
        margin: `${theme.spacing(1)} 0`,
        border: `2px solid ${theme.palette.primary.light}`,
        borderRadius: '20px',
        '&:hover': {
          backgroundColor: theme.palette.primary.light,
        },
      })}
      key={`conversation-${index}`}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <ListItemAvatar sx={{ minWidth: '37px', maxWidth: '37px' }}>
          <ChatIcon />
        </ListItemAvatar>
        <ListItemText
          sx={{
            position: 'relative',
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
            textOverflow: 'clip',
          }}
          primary={conversation.summary ?? 'Untitled'}
          secondary={formatTimestamp(conversation.messages[0].timestamp) ?? ''}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, transparent 96%, white)',
            }}
          />
        </ListItemText>
      </Box>
    </ListItem>
  );
}
