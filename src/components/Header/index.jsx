import { Container, HeaderMenu } from './styles'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo"></img>
      <HeaderMenu>
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </HeaderMenu>
    </Container>
  );
}

export default Header;