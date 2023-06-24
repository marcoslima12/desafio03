import { useEffect, useState } from "react";
import { GithubInfo } from "../../components";
import { BoxModel } from "../../components/Box";
import { PageContainer } from "../../components/PageContainer";
import { PostCard } from "../../components/Post";
import { PostsContainer, StyledUserForm, StyledSearchForm } from "./styles";
import {
  BoxContent,
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
import axios from "axios";
import { useForm } from "react-hook-form";

type UserInfo = {
  name: string;
  html_url: string;
  avatar_url: string;
  bio: string;
  company?: string;
  followers?: number;
  login: string;
};

type UserSearchType = {
  user: string;
}

export function Home() {
  const [userData, setUserData] = useState<UserInfo>({} as UserInfo);
  const [inputUser, setInputUser] = useState<string>("marcoslima12");
  const { register, handleSubmit, reset } = useForm<UserSearchType>();

  const OnSubmit = (data: UserSearchType) => {
    setInputUser(data.user);
    reset();
  };

  const getUserInfo = async () => {
    await axios
      .get(`https://api.github.com/users/${inputUser}`)
      .then(function (response) {
        setUserData(response.data);
        console.log(userData);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, [inputUser]);

  return (
    <PageContainer>
      
      <BoxModel>
        <BoxContent>
          <StyledImage src={userData?.avatar_url} alt="" />
          <ContentInfo>
            <NameGithubContainer>
              <UserName>{userData?.name || "Person name"}</UserName>
              <GitHubLink target="_blank" href={userData?.html_url || "#"}>
                GITHUB
                <ArrowSquareOut size={16} />
              </GitHubLink>
            </NameGithubContainer>
            <p>{userData?.bio || "User bio"}</p>
            <GithubInfoContainer>
              {userData?.login && (
                <GithubInfo infoType="username" username={userData?.login} />
              )}
              {userData?.company && (
                <GithubInfo infoType="company" company={userData?.company} />
              )}
              {userData?.followers && (
                <GithubInfo
                  infoType="followers_number"
                  followers_number={userData?.followers}
                />
              )}
            </GithubInfoContainer>
          </ContentInfo>
        </BoxContent>
      </BoxModel>
      <StyledUserForm onSubmit={handleSubmit(OnSubmit)}>
        <input
          type="text"
          placeholder="Busque pelo user"
          {...register("user")}
        />
      </StyledUserForm>
      <PostsHeader>
        <PostsTitle>Publicações</PostsTitle>
        <PostsAmount>6 publicações</PostsAmount>
      </PostsHeader>
      
      <StyledSearchForm>
        <input type="text" placeholder="Buscar conteúdo" />
      </StyledSearchForm>
      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </PageContainer>
  );
}
