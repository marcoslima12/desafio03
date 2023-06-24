import { GithubInfo, Header } from "../../components";
import { BoxModel } from "../../components/Box";
import { PageContainer } from "../../components/PageContainer";
import { PostCard } from "../../components/Post";
import { PostsContainer, StyledForm } from "./styles";
import {
  BoxContent,
  Container,
  ContentInfo,
  GitHubLink,
  GithubInfoContainer,
  NameGithubContainer,
  PostsAmount,
  PostsHeader,
  PostsTitle,
  StyledImage,
  UserName,
} from "./styles";
import { ArrowSquareOut } from "@phosphor-icons/react";

export function Home() {
  return (
    <PageContainer>
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
              <GithubInfo infoType="username" />
              <GithubInfo infoType="company" />
              <GithubInfo infoType="followers_number" />
            </GithubInfoContainer>
          </ContentInfo>
        </BoxContent>
      </BoxModel>
      <PostsHeader>
        <PostsTitle>Publicações</PostsTitle>
        <PostsAmount>6 publicações</PostsAmount>
      </PostsHeader>
      <StyledForm>
        <input type="text" placeholder="Buscar conteúdo" />
      </StyledForm>
      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </PageContainer>
  );
}
