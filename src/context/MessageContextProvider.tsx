import React, { useCallback, useState } from 'react';
import { Conversation, Message, MessageContextParams } from './types';

const defaultMessageContext: MessageContextParams = {
  addConversation: (conversation: Conversation) => {},
  addMessage: (message: Message) => {},
  getCurrentConversation: () => null,
  setCurrentConversation: () => {},
  currentMessages: [],
  conversations: [],
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
    inputConversations ? inputConversations[inputConversations.length - 1]?.messages : [],
  );

  const addConversation = useCallback(
    (newConversation: Conversation) => {
      setConversations([...conversations, newConversation]);
    },
    [setConversations],
  );

  const addMessage = useCallback(
    (message: Message) => {
      if (currentConversationIndex !== null) {
        conversations[currentConversationIndex].messages.push(message);
        setCurrentMessages([...conversations[currentConversationIndex].messages]);
      } else {
        const newConversation = {
          // TODO: Add settings page and pull down current values
          messages: [message],
          chatConfiguration: { chatApiEndpoint: '', headers: {} },
        };

        addConversation(newConversation);
        setCurrentConversationIndex(0);
        setCurrentMessages([...newConversation.messages]);
      }
    },
    [
      conversations,
      currentConversationIndex,
      addConversation,
      setCurrentConversationIndex,
      setCurrentMessages,
    ],
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
        addMessage,
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
