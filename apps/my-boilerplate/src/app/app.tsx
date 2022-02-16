import styled from 'styled-components';
import Mycmp from './mycmp/mycmp';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Mycmp />
    </StyledApp>
  );
}

export default App;
