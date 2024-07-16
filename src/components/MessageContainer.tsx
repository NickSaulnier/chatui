import { Box, Typography } from '@mui/material';

import { INPUT_BORDER_RADIUS } from './constants';
import { useContext } from 'react';
import { MessageContext } from '../context/MessageContextProvider';

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
        margin: `${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(
          1,
        )} ${theme.spacing(1)}`,
      })}
    >
      <Box
        sx={(theme) => ({
          height: '100%',
          width: '100%',
          margin: `${theme.spacing(2)}`,
          border: `solid 2px ${theme.palette.primary.dark}`,
          borderRadius: `${INPUT_BORDER_RADIUS}px`,
        })}
      >
        {currentConversation?.messages.map((message) => (
          <Typography>{message.content}</Typography>
        ))}
      </Box>
    </Box>
  );
}
