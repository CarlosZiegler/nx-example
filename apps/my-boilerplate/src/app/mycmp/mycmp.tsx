import styled from 'styled-components';
import { SharedButton } from '@test-nx/shared-button';

/* eslint-disable-next-line */
export interface MycmpProps {}

const StyledMycmp = styled.div`
  color: pink;
`;

export function Mycmp(props: MycmpProps) {
  return (
    <StyledMycmp>
      <h1>Welcome to Mycmp!</h1>
      <SharedButton>Teste Button Carlos</SharedButton>
    </StyledMycmp>
  );
}

export default Mycmp;
