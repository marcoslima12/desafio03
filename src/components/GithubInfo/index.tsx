import { GithubLogo, Buildings, Users } from "@phosphor-icons/react";
import { Container } from "./styles";

interface GithubInfoProps {
  infoType?: "username" | "company" | "followers_number";
}

export function GithubInfo({ infoType }: GithubInfoProps) {
  let componentToRender: JSX.Element | null = null;

  switch (infoType) {
    case "username":
      componentToRender = (
        <Container>
          <GithubLogo size={18} />
          name
        </Container>
      );
      break;
    case "company":
      componentToRender = (
        <Container>
          <Buildings size={18} />
          name
        </Container>
      );
      break;
    case "followers_number":
      componentToRender = (
        <Container>
          <Users size={18} />
          name
        </Container>
      );
      break;
    default:
      componentToRender = <></>;
      break;
  }

  return <div>{componentToRender}</div>;
}
