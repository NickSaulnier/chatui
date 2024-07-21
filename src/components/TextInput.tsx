import { Box, TextField } from '@mui/material';
import { useContext, useState } from 'react';

import { InputButton } from './InputButton';
import { INPUT_BORDER_RADIUS, MD_WINDOW_WIDTH, MIN_INPUT_HEIGHT } from './constants';
import { MessageContext } from '../context/MessageContextProvider';
import { Agent } from '../context/types';

export function TextInput() {
  const [textInput, setTextInput] = useState('');

  const { addMessage } = useContext(MessageContext);

  const handleInputEnter = () => {
    addMessage({ agent: Agent.User, timestamp: Date.now(), content: textInput });
    setTextInput('');
  };

  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
          width: `${MD_WINDOW_WIDTH}px`,
        },
      })}
    >
      <Box
        component="form"
        sx={(theme) => ({
          height: 'fit-content',
          width: '100%',
          margin: `${theme.spacing(1)} ${theme.spacing(2)}`,
          '& .MuiTextField-root': {
            width: '100%',
            minHeight: `${MIN_INPUT_HEIGHT}px`,
          },
          '& .MuiOutlinedInput-root': {
            color: 'text.secondary',
            fontFamily: theme.typography.body1.fontFamily,
            fontWeight: '500',
          },
          border: `solid 2px ${theme.palette.primary.dark}`,
          borderRadius: `${INPUT_BORDER_RADIUS}px`,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        })}
        noValidate
      >
        <TextField
          sx={(theme) => ({
            '& fieldset': { border: 'none' },
            input: {
              backgroundColor: 'background.default',
              minHeight: `${MIN_INPUT_HEIGHT}px`,
            },
            '& .MuiInputBase-root': { padding: `0 ${theme.spacing(2)}` },
            display: 'flex',
            justifyContent: 'center',
          })}
          multiline
          autoComplete="On"
          placeholder="Type Message"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <InputButton disabled={textInput === ''} onClick={handleInputEnter} />
      </Box>
    </Box>
  );
}
