import { Box, TextField } from '@mui/material';

import { InputButton } from './InputButton';
import { INPUT_BORDER_RADIUS, MIN_INPUT_HEIGHT } from './constants';

export function TextInput() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
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
        />
        <InputButton />
      </Box>
    </Box>
  );
}
