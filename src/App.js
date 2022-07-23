import { Header } from './components/Header'
import { Body } from './components/Body'
import styled  from 'styled-components'

const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Body/>
    </AppContainer>
  );
}

export default App;
