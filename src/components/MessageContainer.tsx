import { Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useContext, useEffect, useRef } from 'react';

import { MessageContext } from '../context/MessageContextProvider';
import { ChatMessage } from './ChatMessage';
import { Agent } from '../context/types';

export function MessageContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentMessages } = useContext(MessageContext);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [currentMessages]);

  return (
    <Box
      ref={containerRef}
      sx={(theme) => ({
        width: '100%',
        display: 'flex',
        flex: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        margin: `${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)}`,
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
          width: `${theme.breakpoints.values.sm}px`,
        },
      })}
    >
      <Box sx={{ height: '100%', width: '100%' }}>
        {currentMessages?.map((message) => (
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
