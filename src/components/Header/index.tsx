import { Cover, GitHubLogo } from "../../assets";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={GitHubLogo} alt="" />
    </Container>
  )
}
