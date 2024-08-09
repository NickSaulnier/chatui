import { Box, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Conversation } from '../context/types';
import { formatTimestamp } from './utils';
import { ConversationActionButton } from './ConversationActionButton';
import { MessageContext } from '../context/MessageContextProvider';

const ACTION_BUTTONS: {
  tooltipTitle: string;
  Icon: React.ElementType;
}[] = [
  {
    tooltipTitle: 'Edit',
    Icon: EditIcon,
  },
  {
    tooltipTitle: 'Delete',
    Icon: DeleteIcon,
  },
];

type ConversationProps = {
  conversation: Conversation;
  index: number;
};

export function Conversation({ conversation, index }: ConversationProps) {
  const navigate = useNavigate();
  const { setCurrentConversation } = useContext(MessageContext);

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
      onClick={() => {
        setCurrentConversation(index);
        navigate('/');
      }}
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
        {ACTION_BUTTONS.map(({ tooltipTitle, Icon }) => (
          <ConversationActionButton
            key={`action-button-${tooltipTitle}`}
            tooltipTitle={tooltipTitle}
            Icon={Icon}
          />
        ))}
      </Box>
    </ListItem>
  );
}
