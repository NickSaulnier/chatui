import React from 'react';
import { Box, useTheme } from '@mui/material';
import Markdown from 'react-markdown';

import { Agent, Message } from '../context/types';
import tokens from '../theme/_tokens.scss';

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
        <Box
          sx={(theme) => ({
            border: 'solid 1px transparent',
            borderRadius: '12px',
            borderBottomLeftRadius: '0',
            backgroundColor: backgroundColor,
            padding: `0 ${theme.spacing(2)}`,
            fontSize: tokens.body1FontSize,
            fontWeight: tokens.body1FontWeight,
            fontFamily: tokens.body1FontFamily,
            color: theme.palette.text.primary,
          })}
        >
          <Markdown>{message.content}</Markdown>
        </Box>
      </Box>
    </Box>
  );
}
