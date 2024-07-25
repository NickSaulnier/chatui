import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

import type { Conversation } from '../context/types';
import { formatTimestamp, truncateString } from './utils';

type ConversationProps = {
  conversation: Conversation;
  index: number;
};

export function Conversation({ conversation, index }: ConversationProps) {
  return (
    <ListItem key={`conversation-${index}`}>
      <ListItemAvatar>
        <ChatIcon />
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ color: 'text.secondary', fontSize: '15px', fontWeight: 700 }}
        primary={
          conversation.messages[0].content
            ? truncateString(conversation.messages[0].content)
            : 'Untitled'
        }
        secondary={formatTimestamp(conversation.messages[0].timestamp) ?? ''}
      />
    </ListItem>
  );
}
