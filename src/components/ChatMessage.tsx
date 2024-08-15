import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Agent, Message } from '../context/types';

type ChatMessageProps = {
  Icon: React.ElementType;
  message: Message;
};

export function ChatMessage({ Icon, message }: ChatMessageProps) {
  const theme = useTheme();
  const justifyContent = message.agent === Agent.User ? 'flex-end' : 'flex-start';
  const backgroundColor =
    message.agent === Agent.User ? theme.palette.primary.dark : theme.palette.primary.contrastText;

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        justifyContent: justifyContent,
        alignItems: 'center',
        margin: theme.spacing(1),
      })}
    >
      <Box
        sx={(theme) => ({
          width: '75%',
          display: 'flex',
          justifyContent: justifyContent,
          alignItems: 'center',
          padding: theme.spacing(1),
        })}
      >
        <Icon
          sx={{
            color: theme.palette.background.default,
            backgroundColor: backgroundColor,
            marginTop: 'auto',
            marginRight: theme.spacing(1),
            border: '1px solid transparent',
            borderRadius: '20px',
            padding: '2px',
          }}
        />
        <Typography
          sx={(theme) => ({
            border: 'solid 1px transparent',
            borderRadius: '12px',
            borderBottomLeftRadius: '0',
            backgroundColor: backgroundColor,
            padding: theme.spacing(2),
          })}
          variant="body1"
        >
          {message.content}
        </Typography>
      </Box>
    </Box>
  );
}
