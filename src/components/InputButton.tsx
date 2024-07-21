import { Box, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { INPUT_BORDER_RADIUS } from './constants';

const BUTTON_DIM = '28px';

type InputButtonProps = {
  disabled: boolean;
  onClick: () => void;
};

export function InputButton({ disabled, onClick }: InputButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={(theme) => ({
        height: BUTTON_DIM,
        width: BUTTON_DIM,
        minWidth: BUTTON_DIM,
        border: 'solid 2px primary.main',
        borderRadius: `${INPUT_BORDER_RADIUS}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.dark',
        margin: `auto ${theme.spacing(0)} ${theme.spacing(0)} 0`,
        '&:hover': { backgroundColor: 'primary.main' },
        '&:disabled': { opacity: '0.4' },
      })}
      disableRipple
      disabled={disabled}
    >
      <ArrowUpwardIcon sx={{ color: 'background.default' }} />
    </Button>
  );
}
