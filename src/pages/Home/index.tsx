import { GithubInfo, Header } from "../../components";
import { BoxModel } from "../../components/Box";
import {
  BoxContent,
  Container,
  Content,
  ContentInfo,
  GitHubLink,
  GithubInfoContainer,
  NameGithubContainer,
  StyledImage,
  UserName,
} from "./styles";
import { ArrowSquareOut } from "@phosphor-icons/react";

export function Home() {
  return (
    <Container>
      <Header />
      <BoxModel>
        <BoxContent>
          <StyledImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <ContentInfo>
            <NameGithubContainer>
              <UserName>Person Name</UserName>
              <GitHubLink href="#">
                GITHUB
                <ArrowSquareOut size={16} />
              </GitHubLink>
            </NameGithubContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              neque, itaque ducimus tenetur excepturi impedit odio alias nisi
              omnis ipsam dolor explicabo mollitia velit reiciendis officia
              ullam quos nemo ab.
            </p>
            <GithubInfoContainer>
              <GithubInfo infoType="username"/>
              <GithubInfo infoType="company"/>
              <GithubInfo infoType="followers_number"/>
            </GithubInfoContainer>
          </ContentInfo>
        </BoxContent>
      </BoxModel>
    </Container>
  );
}
