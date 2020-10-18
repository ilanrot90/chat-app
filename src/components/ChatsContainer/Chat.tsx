import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Massage } from 'store/types';
import { openGroup } from 'store/actions';
import styled from 'styled-components';
import { TextContent } from 'styles/sharedStyle';

type IProps = {
  chatId: string;
  chatName: string;
  lastMsg: Massage;
  img: string;
};

const ChatGroup = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.l}px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  transition: all ${({ theme }) => theme.utils.quickTransition};
  &:hover {
    opacity: 0.8;
  }
`;
const Image = styled.img`
  flex-shrink: 0;
  display: block;
  height: 50px;
  border-radius: 50%;
`;
const Info = styled.div`
  margin-left: ${({ theme }) => theme.spacing.l}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Time = styled.div`
  margin-left: auto;
`;

const Chat = ({ chatId, chatName, lastMsg, img }: IProps) => {
  const dispatch = useDispatch();
  const setActiveChat = useCallback(
    (id: string) => () => {
      dispatch(openGroup({ id }));
    },
    [dispatch],
  );
  return (
    <ChatGroup onClick={setActiveChat(chatId)}>
      <Image src={img} />
      <Info>
        <TextContent weight={400}>{chatName}</TextContent>
        <TextContent size={12}>{lastMsg.text}</TextContent>
      </Info>
      <Time>{lastMsg.date.toDateString()}</Time>
    </ChatGroup>
  );
};

export default React.memo(Chat);
