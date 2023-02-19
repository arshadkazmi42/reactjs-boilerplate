import { Container, Title, Description } from './components';

import { COLORS } from './constants';

import './App.css';


const STYLES = {
  container: {
    main: {
      maxWidth: '100%',
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '0px',
      paddingBottom: '0px',
      paddingLeft: '20px',
      paddingRight: '20px',
      backgroundColor: `${COLORS.PALETTE.WHITE}`
    },
    header: {
      width: '100%',
      margin: '10px',
      textAlign: 'center'
    },
    middle: {
      width: '60%'
    }
  }
};

function App() {
  return (
    <div className="App">
      <Container theme={STYLES.container.main}>
        <Container theme={STYLES.container.header}>
          <Title>Title</Title>
          <Description>Subtitle</Description>
        </Container>
        
      </Container>
    </div>
  );
}

export default App;
