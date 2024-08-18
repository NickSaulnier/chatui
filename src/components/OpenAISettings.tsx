import { Box } from '@mui/material';
import { LabeledCheckboxAndSlider } from './LabeledCheckboxAndSlider';
import { LabeledTextInput } from './LabeledTextInput';

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
      <LabeledTextInput label="URL" defaultValue="http://localhost:11434/v1" />
      <LabeledTextInput label="Model" defaultValue="" />
      <LabeledCheckboxAndSlider
        label="Temperature"
        onChange={() => {}}
        min={0.1}
        max={1.0}
        step={0.1}
        defaultValue={0.7}
        disableByDefault={false}
      />
      <LabeledCheckboxAndSlider
        label="Top P"
        onChange={() => {}}
        min={0.1}
        max={1.0}
        step={0.1}
        defaultValue={0.7}
        disableByDefault={true}
      />
    </Box>
  );
}
