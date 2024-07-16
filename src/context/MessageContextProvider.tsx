import React, { useCallback, useState } from 'react';
import { Conversation, Message, MessageContextParams } from './types';

const defaultMessageContext: MessageContextParams = {
  addConversation: (conversations: Array<Conversation>) => {},
  addMessage: (message: Message) => {},
  getCurrentConversation: () => null,
};

export const MessageContext = React.createContext(defaultMessageContext);

const MessageContextProvider = ({
  children,
  inputConversations,
}: {
  children: any;
  inputConversations?: Array<Conversation>;
}) => {
  const [conversations, setConversations] = useState<Array<Conversation>>(
    inputConversations ?? [],
  );
  const [currentConversationIndex, setCurrentConversationIndex] = useState<
    number | null
  >(
    inputConversations && inputConversations.length > 0
      ? inputConversations.length - 1
      : null,
  );

  const addConversation = useCallback(
    (newConversations: Array<Conversation>) => {
      if (newConversations.length > 0) {
        setConversations(newConversations);
        setCurrentConversationIndex(newConversations.length - 1);
      }
    },
    [],
  );

  const addMessage = useCallback((message: Message) => {
    if (currentConversationIndex !== null) {
      conversations[currentConversationIndex].messages.push(message);
    }
  }, []);

  const getCurrentConversation = useCallback(() => {
    return currentConversationIndex !== null
      ? conversations[currentConversationIndex]
      : null;
  }, []);

  return (
    <MessageContext.Provider
      value={{ addConversation, addMessage, getCurrentConversation }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
