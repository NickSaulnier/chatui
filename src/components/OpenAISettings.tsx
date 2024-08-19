import { Box } from '@mui/material';
import { LabeledCheckboxAndSlider } from './LabeledCheckboxAndSlider';
import { LabeledTextInput } from './LabeledTextInput';
import { SettingsContext } from '../context/SettingsContextProvider';
import { useContext } from 'react';

export function OpenAISettings() {
  const {
    baseURL,
    model,
    max_tokens,
    temperature,
    top_p,
    setBaseURL,
    setModel,
    setMaxTokens,
    setTemperature,
    setTopP,
  } = useContext(SettingsContext);

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
      <LabeledTextInput
        label="URL"
        value={baseURL}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBaseURL(event.target.value)}
      />
      <LabeledTextInput
        label="Model"
        value={model}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setModel(event.target.value)}
      />
      <LabeledTextInput
        label="Max Tokens"
        value={max_tokens}
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setMaxTokens(Number(event.target.value))
        }
      />
      <LabeledCheckboxAndSlider
        label="Temperature"
        onChange={(event, value) => setTemperature(value as number)}
        min={0}
        max={1.0}
        step={0.1}
        value={temperature}
        defaultValue={0.7}
      />
      <LabeledCheckboxAndSlider
        label="Top P"
        onChange={(event, value) => setTopP(value as number)}
        min={0}
        max={1.0}
        step={0.1}
        value={top_p}
        defaultValue={0.7}
      />
    </Box>
  );
}
