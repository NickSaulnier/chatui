import React, { useState } from 'react';
import { SettingsContextParams } from './types';

const defaultSettingsContext: SettingsContextParams = {
  baseURL: 'http://localhost:11434/v1',
  model: 'llama3',
  max_tokens: 2048,
  temperature: undefined,
  top_p: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setBaseURL: (baseURL: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setModel: (model: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMaxTokens: (maxTokens: number) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTemperature: (temperature: number) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTopP: (topP: number) => {},
};

export const SettingsContext = React.createContext(defaultSettingsContext);

const SettingsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [baseURL, setBaseURL] = useState(defaultSettingsContext.baseURL);
  const [model, setModel] = useState(defaultSettingsContext.model);
  const [max_tokens, setMaxTokens] = useState(defaultSettingsContext.max_tokens);
  const [temperature, setTemperature] = useState(defaultSettingsContext.temperature);
  const [top_p, setTopP] = useState(defaultSettingsContext.top_p);

  return (
    <SettingsContext.Provider
      value={{
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
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
