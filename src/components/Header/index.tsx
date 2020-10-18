import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'store/types';
import styled from 'styled-components';
import { TextContent, HEADER_HEIGHT } from 'styles/sharedStyle';

const StyledHeader = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: #61dafb;
  display: flex;
  padding: ${({ theme }) => theme.spacing.l}px;
  align-items: center;
`;

const UserInfo = styled.div`
  height: 100%;
  max-width: 50%;
  display: flex;
  ${({ theme }) => theme.utils.centerFlex}
`;

const Img = styled.img`
  flex-shrink: 0;
  display: block;
  height: 40px;
  border-radius: 50%;
`;
const Name = styled(TextContent)`
  margin-left: ${({ theme }) => theme.spacing.m}px;
  justify-self: center;
`;

const Header = () => {
  const { currentUser } = useSelector((s: IState) => s.chat);
  return (
    <StyledHeader>
      <UserInfo>
        <Img src={currentUser.img} />
        <Name>{currentUser.name}</Name>
      </UserInfo>
    </StyledHeader>
  );
};

export default React.memo(Header);
