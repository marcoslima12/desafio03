import { Header } from "../Header";
import { Container, BodyContainer } from "./styles";

interface ContentProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: ContentProps) {
  return (
    <Container>
        <Header />
        <BodyContainer>
            {children}
        </BodyContainer>
    </Container>

  );
}
