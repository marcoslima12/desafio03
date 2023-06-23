import { Cover } from "../../assets";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
        <img src={Cover} alt="Header cover" />
    </Container>
  )
}
