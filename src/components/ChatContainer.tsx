import { Box } from '@mui/material';

import { TextInput } from './TextInput';
import { MessageContainer } from './MessageContainer';

export function ChatContainer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 'auto',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <MessageContainer />
      <TextInput />
    </Box>
  );
}
