import { Box, Checkbox, Slider, Typography, useTheme } from '@mui/material';
import { ChangeEvent, useCallback, useRef, useState } from 'react';

type LabeledCheckboxAndSliderProps = {
  label: string;
  onChange: (event: Event | ChangeEvent<HTMLInputElement>, value?: number | number[]) => void;
  min: number;
  max: number;
  step: number;
  defaultValue?: number;
  value?: number;
};

export function LabeledCheckboxAndSlider({
  label,
  onChange,
  min,
  max,
  step,
  value,
  defaultValue,
}: LabeledCheckboxAndSliderProps) {
  const sliderRef = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState(value === undefined);
  const theme = useTheme();

  const handleCheckboxChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setDisabled(!checked);

      if (!checked) {
        onChange(event, undefined);
      } else if (sliderRef.current) {
        onChange(event, Number(sliderRef.current.textContent));
      }
    },
    [onChange],
  );

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
          onChange={handleCheckboxChange}
          style={{ color: theme.palette.primary.dark }}
        />
        <Slider
          aria-label={label}
          value={value}
          defaultValue={defaultValue}
          valueLabelDisplay="auto"
          step={step}
          marks
          min={min}
          max={max}
          getAriaValueText={(value) => `${value}`}
          disabled={disabled}
          onChange={onChange}
          ref={sliderRef}
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
