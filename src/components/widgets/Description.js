import { Container, Text } from '../core';

import { COLORS } from '../../constants';


const STYLE = {
  container: {
    margin: '5px'
  },
  text: {
    color: COLORS.PALETTE.TEXT_GRAY,
    fontSize: '18px',
    lineHeight: '1.7'
  }
};


function Description(props) {
  return (
    <Container theme={STYLE.container}>
      <Text theme={STYLE.text}>{props.children}</Text>
    </Container>
  )
}


export default Description;