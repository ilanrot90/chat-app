import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from 'store/types';
import { HEADER_HEIGHT } from 'styles/sharedStyle';
import Header from './Header';
import ChatArea from './ChatArea';

const Drawer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: -100%;
  top: ${HEADER_HEIGHT}px;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background-color: #e5ddd5;
  transition: transform ${({ theme }) => theme.utils.normalTransition};
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(-100%);
    `}
`;
const ChatDrawer = () => {
  const { activeGroup } = useSelector((s: IState) => s.chat);

  return (
    <Drawer isOpen={!!activeGroup}>
      {activeGroup && (
        <>
          <Header activeGroup={activeGroup} /> <ChatArea activeGroup={activeGroup} />{' '}
        </>
      )}
    </Drawer>
  );
};

export default React.memo(ChatDrawer);
