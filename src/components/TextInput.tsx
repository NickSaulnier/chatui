import { Box, TextField } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';

import { InputButton } from './InputButton';
import { INPUT_BORDER_RADIUS, MIN_INPUT_HEIGHT } from './constants';
import { MessageContext } from '../context/MessageContextProvider';
import { Agent } from '../context/types';
import { fetchOpenAICompletion } from '../requests/OpenAi';
import { SettingsContext } from '../context/SettingsContextProvider';

export function TextInput() {
  const [textInput, setTextInput] = useState('');
  const [sendRequest, setSendRequest] = useState(false);
  const [isStreamingCompletion, setIsStreamingCompletion] = useState(false);

  const { addMessage, addMessageStreamingChunk } = useContext(MessageContext);
  const { baseURL, model, apiKey, max_tokens, temperature, top_p } = useContext(SettingsContext);

  const fetchCompletion = useCallback(() => {
    fetchOpenAICompletion({
      prompt: textInput,
      baseURL,
      apiKey,
      model,
      messages: [],
      max_tokens,
      temperature,
      top_p,
      stream: true,
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then(async (completion: any) => {
        // Add an empty message to hold the streaming message chunks.
        addMessage({
          agent: Agent.Bot,
          timestamp: Date.now(),
          content: '',
        });

        for await (const chunk of completion.iterator()) {
          addMessageStreamingChunk(chunk.choices[0].delta.content || '');
        }

        // Re-enable the input button once the completion is fully received.
        setIsStreamingCompletion(false);
      })
      .catch((err) => {
        console.error(err);
        // Ensure more requests can be sent
        setIsStreamingCompletion(false);
      });

    setTextInput('');
  }, [
    addMessage,
    addMessageStreamingChunk,
    setIsStreamingCompletion,
    apiKey,
    baseURL,
    max_tokens,
    model,
    temperature,
    textInput,
    top_p,
  ]);

  const handleInputEnter = useCallback(async () => {
    addMessage({ agent: Agent.User, timestamp: Date.now(), content: textInput });
    setSendRequest(true);
    setIsStreamingCompletion(true);
  }, [addMessage, textInput]);

  // A fetch request will be triggered when handleInputEnter is called.
  // We have to use a useEffect for this operation so that fetchCompletion
  // has an up-to-date conversation index when the new message is added.
  useEffect(() => {
    if (sendRequest) {
      fetchCompletion();
      setSendRequest(false);
    }
  }, [fetchCompletion, sendRequest, textInput]);

  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
          width: `${theme.breakpoints.values.sm}px`,
        },
      })}
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
            fontFamily: theme.typography.body1.fontFamily,
            fontWeight: '500',
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
          placeholder="Type Message"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <InputButton
          disabled={textInput === '' || isStreamingCompletion}
          onClick={handleInputEnter}
        />
      </Box>
    </Box>
  );
}
