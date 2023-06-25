import { GithubLogo, Buildings, Users } from "@phosphor-icons/react";
import { Container } from "./styles";
import { NumberLiteralType } from "typescript";

type GithubInfoProps = {
  infoType?: "username" | "company" | "followers_number";
  username?: string;
  followers_number?: number;
  company?: string;
};

export function GithubInfo(props: GithubInfoProps) {
  let componentToRender: JSX.Element | null = null;

  switch (props.infoType) {
    case "username":
      componentToRender = (
        <Container>
          <GithubLogo color="#3A536B" size={18} />
          {props.username}
        </Container>
      );
      break;
    case "company":
      componentToRender = (
        <Container>
          <Buildings size={18} />
          {props.company}
        </Container>
      );
      break;
    case "followers_number":
      componentToRender = (
        <Container>
          <Users size={18} />
          {props.followers_number}
        </Container>
      );
      break;
    default:
      componentToRender = <></>;
      break;
  }

  return <div>{componentToRender}</div>;
}
