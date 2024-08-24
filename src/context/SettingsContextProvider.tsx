import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

import type { SettingsContextParams } from './types';

const defaultSettingsContext: SettingsContextParams = {
  baseURL: 'http://localhost:11434/v1',
  model: 'llama3',
  apiKey: 'ollama',
  max_tokens: 2048,
  temperature: undefined,
  top_p: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setBaseURL: (baseURL: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setModel: (model: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setApiKey: (apiKey: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMaxTokens: (maxTokens: number) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTemperature: (temperature: number) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTopP: (topP: number) => {},
};

export const SettingsContext = createContext(defaultSettingsContext);

const SettingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [baseURL, setBaseURL] = useState(defaultSettingsContext.baseURL);
  const [model, setModel] = useState(defaultSettingsContext.model);
  const [apiKey, setApiKey] = useState(defaultSettingsContext.apiKey);
  const [max_tokens, setMaxTokens] = useState(defaultSettingsContext.max_tokens);
  const [temperature, setTemperature] = useState(defaultSettingsContext.temperature);
  const [top_p, setTopP] = useState(defaultSettingsContext.top_p);

  return (
    <SettingsContext.Provider
      value={{
        baseURL,
        model,
        apiKey,
        max_tokens,
        temperature,
        top_p,
        setBaseURL,
        setModel,
        setApiKey,
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
