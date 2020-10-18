import React, { useCallback } from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT, TextContent } from 'styles/sharedStyle';
import { ActiveGroup } from 'store/types';
import { useDispatch } from 'react-redux';
import { closeGroup } from 'store/actions';

const Container = styled.div`
  height: ${HEADER_HEIGHT}px;
  display: flex;
  padding: ${({ theme }) => theme.spacing.l}px;
  background-color: #61dafb;
  opacity: 0.8;
`;
const BackBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${({ theme }) => theme.utils.centerFlex};
  cursor: pointer;
  border: none;
  outline: none;
  transition: opacity ${({ theme }) => theme.utils.quickTransition};
  &:hover {
    opacity: 0.8;
  }
`;
const Info = styled.div`
  margin-left: ${({ theme }) => theme.spacing.l}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Image = styled.img`
  margin-left: ${({ theme }) => theme.spacing.l}px;
  flex-shrink: 0;
  display: block;
  height: 50px;
  border-radius: 50%;
`;
type IProps = {
  activeGroup: ActiveGroup;
};

const Header = ({ activeGroup }: IProps) => {
  const dispatch = useDispatch();
  const goBack = useCallback(() => {
    dispatch(closeGroup());
  }, [dispatch]);
  return (
    <Container>
      <BackBtn onClick={goBack}>
        <span>⬅</span>
      </BackBtn>
      <Image src={activeGroup?.img} />

      <Info>
        <TextContent weight={400}>{activeGroup?.name}</TextContent>
        <TextContent size={12}>online</TextContent>
      </Info>
    </Container>
  );
};

export default React.memo(Header);
