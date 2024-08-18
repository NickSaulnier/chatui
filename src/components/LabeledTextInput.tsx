import { Box, TextField, Typography } from '@mui/material';

type LabeledTextInputProps = {
  label: string;
  defaultValue: string;
};

export function LabeledTextInput({ label, defaultValue }: LabeledTextInputProps) {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflowY: 'auto',
        margin: `${theme.spacing(1)}`,
        [theme.breakpoints.up('sm')]: {
          width: `${theme.breakpoints.values.sm}px`,
        },
      })}
    >
      <Box sx={{ width: '80%' }}>
        <Typography variant="subtitle1" sx={(theme) => ({ color: theme.palette.text.secondary })}>
          {label}
        </Typography>
      </Box>
      <TextField
        hiddenLabel
        defaultValue={defaultValue}
        sx={(theme) => ({
          width: '80%',
          input: { color: theme.palette.text.secondary, fontSize: '15px' },
        })}
      />
    </Box>
  );
}
