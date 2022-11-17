import "./global.css";
import styled from "styled-components";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 348px 1fr;
  gap: 3.75rem;
  align-items: flex-start;
`;

function App() {
  return (
    <Wrapper>
      <Aside />
      <Main />
    </Wrapper>
  );
}

export default App;
