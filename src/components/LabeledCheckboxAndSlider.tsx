import { Box, Checkbox, Slider, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

type LabeledCheckboxAndSliderProps = {
  label: string;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
};

export function LabeledCheckboxAndSlider({
  label,
  min,
  max,
  step,
  defaultValue,
}: LabeledCheckboxAndSliderProps) {
  const [disabled, setDisabled] = useState(false);
  const theme = useTheme();

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
      <Box
        sx={{ width: '80%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <Checkbox
          checked={!disabled}
          onChange={() => setDisabled(!disabled)}
          style={{ color: theme.palette.primary.dark }}
        />
        <Slider
          aria-label={label}
          defaultValue={defaultValue}
          valueLabelDisplay="auto"
          step={step}
          marks
          min={min}
          max={max}
          getAriaValueText={(value) => `${value}`}
          disabled={disabled}
          sx={(theme) => ({
            width: '100%',
            margin: theme.spacing(1),
            color: theme.palette.primary.dark,
          })}
        />
      </Box>
    </Box>
  );
}
