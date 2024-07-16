import { Agent, Conversation } from "./types";

export const mockConversation: Array<Conversation> = [
  {
    messages: [
      {
        agent: Agent.Bot,
        timestamp: 1720736439,
        content: "Hello, I am your Virtual CFO, here to answer any financial questions you may have regarding rental properties in the Seattle area. How may I be of assistance?",
      },
      {
        agent: Agent.User,
        timestamp: 1720736451,
        content: "Hi, could you please give me a quote on this non-existent property please? I need some mock data!",
      }
    ],
    chatConfiguration: {
      chatApiEndpoint: 'fake.endpoint',
      headers: {}
    }
  }
];