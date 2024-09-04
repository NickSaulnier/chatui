import { createContext, useCallback, useState } from 'react';
import type { ReactNode } from 'react';

import type { Conversation, Message, MessageContextParams } from './types';

const defaultMessageContext: MessageContextParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addConversation: (conversation: Conversation) => {},
  createConversation: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addMessage: (message: Message) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addMessageStreamingChunk: (messageChunk: string) => {},
  getCurrentConversation: () => null,
  setCurrentConversation: () => {},
  currentMessages: [],
  conversations: [],
};

export const MessageContext = createContext(defaultMessageContext);

const MessageContextProvider = ({
  children,
  inputConversations,
}: {
  children: ReactNode;
  inputConversations?: Array<Conversation>;
}) => {
  const [conversations, setConversations] = useState<Array<Conversation>>(inputConversations ?? []);
  const [currentConversationIndex, setCurrentConversationIndex] = useState<number | null>(null);
  const [currentMessages, setCurrentMessages] = useState<Array<Message>>([]);

  const addConversation = useCallback(
    (newConversation: Conversation) => {
      setConversations([newConversation, ...conversations]);
    },
    [conversations, setConversations],
  );

  const createConversation = useCallback(
    (messages?: Array<Message>) => {
      const newConversation = {
        messages: messages ?? [],
        summary: 'New conversation',
        chatConfiguration: { chatApiEndpoint: '', headers: {} },
      };

      addConversation(newConversation);
      setCurrentConversationIndex(0);
      setCurrentMessages([...newConversation.messages]);
    },
    [addConversation, setCurrentMessages, setCurrentConversationIndex],
  );

  const addMessage = useCallback(
    (message: Message) => {
      if (currentConversationIndex !== null) {
        conversations[currentConversationIndex].messages.push(message);
        setCurrentMessages([...conversations[currentConversationIndex].messages]);
      } else {
        createConversation([message]);
      }
    },
    [currentConversationIndex, conversations, createConversation],
  );

  const addMessageStreamingChunk = useCallback(
    (messageChunk: string) => {
      if (currentConversationIndex !== null) {
        const currentMessage = conversations[currentConversationIndex].messages.pop();

        // An empty message should be added before addMessageStreamingChunk is called for each
        // chunk.
        if (currentMessage) {
          const newMessage = currentMessage?.content + messageChunk;
          currentMessage.content = newMessage;
          conversations[currentConversationIndex].messages.push(currentMessage);
          setCurrentMessages([...conversations[currentConversationIndex].messages]);
        }
      }
    },
    [currentConversationIndex, conversations],
  );

  const getCurrentConversation = useCallback(() => {
    return currentConversationIndex !== null ? conversations[currentConversationIndex] : null;
  }, [currentConversationIndex, conversations]);

  const setCurrentConversation = useCallback(
    (index: number) => {
      setCurrentConversationIndex(index);
      setCurrentMessages([...conversations[index].messages]);
    },
    [setCurrentConversationIndex, setCurrentMessages, conversations],
  );

  return (
    <MessageContext.Provider
      value={{
        addConversation,
        createConversation,
        addMessage,
        addMessageStreamingChunk,
        getCurrentConversation,
        setCurrentConversation,
        currentMessages,
        conversations,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
