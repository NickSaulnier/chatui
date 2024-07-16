import { Box, Theme, Typography } from '@mui/material';
import { Agent, Message } from '../context/types';

type ChatMessageProps = {
  Icon: React.ElementType;
  message: Message;
};

export function ChatMessage({ Icon, message }: ChatMessageProps) {
  const justifyContent = message.agent === Agent.User ? 'flex-end' : 'flex-start';

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        justifyContent: `${justifyContent}`,
        alignItems: 'center',
        margin: `${theme.spacing(1)}`,
      })}
    >
      <Box
        sx={(theme) => ({
          width: '75%',
          display: 'flex',
          alignItems: 'center',
          padding: `${theme.spacing(1)}`,
        })}
      >
        <Icon
          sx={(theme: Theme) => ({
            color: `${theme.palette.primary.dark}`,
          })}
        />
        <Typography
          sx={(theme) => ({
            border: 'solid 1px transparent',
            borderRadius: '12px',
            backgroundColor: `${theme.palette.primary.dark}`,
            padding: `${theme.spacing(2)}`,
          })}
          variant="body1"
        >
          {message.content}
        </Typography>
      </Box>
    </Box>
  );
}
