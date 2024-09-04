import OpenAI from 'openai';
import {
  ChatCompletionCreateParamsBase,
  ChatCompletionMessageParam,
} from 'openai/resources/chat/completions';
import { Agent } from '../context/types';

type OpenAIClientProps = {
  baseURL: string;
  apiKey: string;
};

type fetchOpenAICompletionProps = {
  prompt: string;
} & ChatCompletionCreateParamsBase &
  OpenAIClientProps;

export async function fetchOpenAICompletion({
  prompt,
  baseURL,
  apiKey,
  model,
  messages,
  stream,
  ...props
}: fetchOpenAICompletionProps) {
  const client = new OpenAI({
    baseURL: baseURL,
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  const conversation: Array<ChatCompletionMessageParam> = [
    ...messages,
    { role: Agent.User, content: prompt },
  ];
  const completion = await client.chat.completions.create({
    model,
    messages: conversation,
    stream,
    ...props,
  });

  return completion;
}
