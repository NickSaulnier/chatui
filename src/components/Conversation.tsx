import { Box, Button, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';

import type { Conversation } from '../context/types';
import { formatTimestamp } from './utils';

type ConversationProps = {
  conversation: Conversation;
  index: number;
};

export function Conversation({ conversation, index }: ConversationProps) {
  return (
    <ListItem
      sx={(theme) => ({
        width: 'auto',
        margin: `${theme.spacing(1)}`,
        border: `2px solid ${theme.palette.primary.light}`,
        borderRadius: '20px',
        '&:hover': {
          backgroundColor: theme.palette.primary.light,
          cursor: 'pointer',
        },
      })}
      key={`conversation-${index}`}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <ListItemAvatar sx={{ minWidth: '37px', maxWidth: '37px' }}>
          <ChatIcon />
        </ListItemAvatar>
        <ListItemText
          sx={(theme) => ({
            // Directly style the span on mobile so that a breakpoint can be
            // used for smaller fontSize styling
            '& span': {
              fontSize: '15px',
              [theme.breakpoints.down('sm')]: {
                fontSize: '13px',
              },
            },
          })}
          primaryTypographyProps={{
            color: 'text.secondary',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          primary={conversation.summary ?? 'Untitled'}
          secondary={formatTimestamp(conversation.messages[0].timestamp) ?? ''}
        />
        <Tooltip title="Delete">
          <Button
            sx={{
              minWidth: '30px',
              width: '30px',
              height: '30px',
              border: 'solid 1px transparent',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            // Inline style to remove the default hover effect
            style={{ backgroundColor: 'transparent' }}
          >
            <DeleteIcon
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                '&:hover': {
                  color: theme.palette.primary.dark,
                },
              })}
            />
          </Button>
        </Tooltip>
      </Box>
    </ListItem>
  );
}
