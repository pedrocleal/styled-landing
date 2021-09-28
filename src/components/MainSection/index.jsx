import { Container, Title, SmallText, Button, Wave } from './styles'

import illustration from '../../assets/illustration-intro.png'
import wave from '../../assets/bg-curvy-desktop.svg'

function MainSection() {
  return (
    <>
      <Container>
        <img src={illustration} alt="Illustration"></img>
        <Title>All your files in one secure location, <br/> acessible anywhere.</Title>
        <SmallText>
          Fylo stores all your most important ifles in one secure location. <br/>Access them wherever you need, share and
          collaborate with <br/>friends family, and co-workers.
        </SmallText>
        <Button>Get Started</Button>
        
      </Container>
      <Wave>
        <img src={wave} alt="Wave"></img>
      </Wave>
    </>
  );
}

export default MainSection;