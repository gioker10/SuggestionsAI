import React from 'react';
import styled from 'styled-components';
import { SearchBar } from './SearchBar';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 200px;
  width: 100%;
  align-items: center;
`;

const TitleArea = styled(Area)`
  margin-bottom: 0;
  padding-bottom: 36px;
  justify-content: flex-end;
`;

const StyledTitle = styled.div`
  font-size: 92px;
`;

interface Props {
  title: string;
}

export const PageMain = ({ title }): Props => {
  return (
    <PageContainer>
      <TitleArea>
        <StyledTitle>{title}</StyledTitle>
      </TitleArea>
      <Area>
        <SearchBar searchType={title} />
      </Area>
    </PageContainer>
  );
};
