import { Box } from '@mui/material';
import { LabeledCheckboxAndSlider } from './LabeledCheckboxAndSlider';

export function OpenAISettings() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <LabeledCheckboxAndSlider
        label="Temperature"
        onChange={() => {}}
        min={0.0}
        max={1.0}
        step={0.1}
        defaultValue={0.7}
      />
      <LabeledCheckboxAndSlider
        label="Top P"
        onChange={() => {}}
        min={0.0}
        max={1.0}
        step={0.1}
        defaultValue={0.7}
      />
    </Box>
  );
}
