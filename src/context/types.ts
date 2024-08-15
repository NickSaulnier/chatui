export enum Agent {
  User = 'user',
  Bot = 'bot',
}

export type Message = {
  agent: Agent;
  timestamp: number;
  content: string;
};

export type ChatConfiguration = {
  chatApiEndpoint: string;

  // Additional headers to be sent with the request
  headers: Record<string, string>;

  // Custom properties to be sent with the request
  properties?: Record<string, any>; //eslint-disable-line @typescript-eslint/no-explicit-any

  // Indicates whether the user agent should send or receive cookies from the other domain
  // in the case of cross-origin requests.
  credentials?: RequestCredentials;
};

export type Conversation = {
  messages: Array<Message>;
  chatConfiguration: ChatConfiguration;
  summary?: string;
};

export type MessageContextParams = {
  addConversation: (conversation: Conversation) => void;
  createConversation: () => void;
  addMessage: (message: Message) => void;
  getCurrentConversation: () => Conversation | null;
  setCurrentConversation: (index: number) => void;
  currentMessages: Array<Message>;
  conversations: Array<Conversation>;
};
