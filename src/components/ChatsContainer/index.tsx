import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from 'store/types';
import Chat from './Chat';

const Container = styled.ol`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
`;
const ChatsContainer = () => {
  const { groups } = useSelector((s: IState) => s.chat);
  return (
    <Container>
      {groups.map((chat) => (
        <Chat
          key={chat.id}
          chatId={chat.id}
          chatName={chat.name}
          lastMsg={chat.history.slice(-1)[0]}
          img={chat.img}
        />
      ))}
    </Container>
  );
};

export default React.memo(ChatsContainer);
