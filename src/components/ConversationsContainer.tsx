import { Box, List, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { MessageContext } from '../context/MessageContextProvider';
import { Conversation } from './Conversation';
import { ConversationItem } from './ConversationItem';

export function ConversationsContainer() {
  const { conversations, createConversation, setCurrentConversation } = useContext(MessageContext);
  const navigate = useNavigate();

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
        <List sx={{ width: '100%', height: '100%' }}>
          <ConversationItem
            clickHandler={() => {
              createConversation();
              navigate('/');
            }}
          >
            <Tooltip title="New conversation">
              <Box
                sx={{
                  width: '100%',
                  minHeight: '56px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AddIcon sx={{ width: '40px', height: '40px' }} />
              </Box>
            </Tooltip>
          </ConversationItem>
          {conversations.map((conversation, index) => (
            <ConversationItem
              clickHandler={() => {
                setCurrentConversation(index);
                navigate('/');
              }}
            >
              <Conversation key={`conversation-${index}`} conversation={conversation} />
            </ConversationItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
