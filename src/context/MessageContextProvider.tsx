import React, { useCallback, useState } from 'react';
import { Conversation, Message, MessageContextParams } from './types';

const defaultMessageContext: MessageContextParams = {
  addConversation: (conversation: Conversation) => {},
  addMessage: (message: Message) => {},
  getCurrentConversation: () => null,
  currentMessages: [],
};

export const MessageContext = React.createContext(defaultMessageContext);

const MessageContextProvider = ({
  children,
  inputConversations,
}: {
  children: any;
  inputConversations?: Array<Conversation>;
}) => {
  const [conversations, setConversations] = useState<Array<Conversation>>(inputConversations ?? []);
  const [currentConversationIndex, setCurrentConversationIndex] = useState<number | null>(
    inputConversations && inputConversations.length > 0 ? inputConversations.length - 1 : null,
  );
  const [currentMessages, setCurrentMessages] = useState<Array<Message>>(
    inputConversations ? inputConversations[inputConversations.length - 1].messages : [],
  );

  const addConversation = useCallback(
    (newConversation: Conversation) => {
      setConversations([...conversations, newConversation]);
    },
    [setConversations, setCurrentConversationIndex],
  );

  const addMessage = useCallback(
    (message: Message) => {
      if (currentConversationIndex !== null) {
        conversations[currentConversationIndex].messages.push(message);
        setCurrentMessages([...conversations[currentConversationIndex].messages]);
      }
    },
    [conversations, currentConversationIndex],
  );

  const getCurrentConversation = useCallback(() => {
    return currentConversationIndex !== null ? conversations[currentConversationIndex] : null;
  }, [currentConversationIndex, conversations]);

  return (
    <MessageContext.Provider
      value={{ addConversation, addMessage, getCurrentConversation, currentMessages }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
