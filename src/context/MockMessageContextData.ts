import { Agent, Conversation } from './types';

export const mockConversation: Array<Conversation> = [
  {
    messages: [
      {
        agent: Agent.Bot,
        timestamp: 1382086394001,
        content:
          'Hello, I am your Virtual CFO, here to answer any financial questions you may have regarding rental properties in the Seattle area. How may I be of assistance?',
      },
      {
        agent: Agent.User,
        timestamp: 1382086394009,
        content:
          'Hi, could you please give me a quote on this non-existent property please? I need some mock data!',
      },
    ],
    chatConfiguration: {
      chatApiEndpoint: 'fake.endpoint',
      headers: {},
    },
    summary:
      'A mock conversation, with a longer than average summary to test the text clipping gradient.',
  },
  {
    messages: [
      {
        agent: Agent.User,
        timestamp: 1382086395001,
        content: 'A second conversation, just for example.',
      },
      {
        agent: Agent.Bot,
        timestamp: 1382086395009,
        content: 'This is a second mock conversation.',
      },
    ],
    chatConfiguration: {
      chatApiEndpoint: 'fake.endpoint',
      headers: {},
    },
    summary: 'A second mock conversation.',
  },
];
