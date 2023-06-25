import { useEffect, useState } from "react";
import { GithubInfo } from "../../components";
import { BoxModel } from "../../components/Box";
import { PageContainer } from "../../components/PageContainer";
import { PostCard } from "../../components/Post";
import {
  PostsContainer,
  StyledForm,
} from "./styles";
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

type IssueType = {
  title: string;
  body: string;
  created_at: string;
};

type IssuesInfo = {
  total_count: number;
  incomplete_results: boolean;
  items: IssueType[];
};

type UserSearchType = {
  user: string;
  search: string;
};

export function Home() {
  const [userData, setUserData] = useState<UserInfo>({} as UserInfo);
  const [inputUser, setInputUser] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [issuesData, setIssuesData] = useState<IssuesInfo>({} as IssuesInfo);
  const { register, handleSubmit, reset } = useForm<UserSearchType>();

  function converterDataParaTexto(dataDesejada: Date): string {
    const dataAtual = new Date();
    const diferencaEmMilissegundos =
      dataAtual.getTime() - dataDesejada.getTime();
    const diferencaEmSegundos = Math.floor(diferencaEmMilissegundos / 1000);
    const diferencaEmMinutos = Math.floor(diferencaEmSegundos / 60);
    const diferencaEmHoras = Math.floor(diferencaEmMinutos / 60);
    const diferencaEmDias = Math.floor(diferencaEmHoras / 24);
    const diferencaEmMeses = Math.floor(diferencaEmDias / 30);
    const diferencaEmAnos = Math.floor(diferencaEmDias / 365);

    if (diferencaEmAnos > 0) {
      return `há ${diferencaEmAnos} ano(s)`;
    } else if (diferencaEmMeses > 0) {
      return `há ${diferencaEmMeses} mes(es)`;
    } else if (diferencaEmDias > 0) {
      return `há ${diferencaEmDias} dia(s)`;
    } else if (diferencaEmHoras > 0) {
      return `há ${diferencaEmHoras} hora(s)`;
    } else if (diferencaEmMinutos > 0) {
      return `há ${diferencaEmMinutos} minuto(s)`;
    } else {
      return `há alguns segundos`;
    }
  }

  const OnSubmit = (data: UserSearchType) => {
    setInputUser(data.user);
    setSearch(data.search);
    reset();
  };

  /*https://api.github.com/repos/{owner}/{repo}/issues/{issue_number} */

  useEffect(()=>{
    if(search===''){
      getUserInfo();
      getUserIssues();
    }
    else if(search!==''){
      getUserInfo();
      getUserIssuesSearch();
    }
    else {
      return
    }
  }, [inputUser, search])

  const getUserIssues = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=user:${inputUser}`
      );

      console.log("AQUII" + response.data);
      setIssuesData(response.data);
      console.log(issuesData);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserIssuesSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${search}%20user:${inputUser}`
      );

      console.log("AQUII" + response.data);
      setIssuesData(response.data);
      console.log(issuesData);
    } catch (error) {
      console.error(error);
    }
  }

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${inputUser}`
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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

      <PostsHeader>
        <PostsTitle>Publicações</PostsTitle>
        <PostsAmount>{issuesData.total_count}</PostsAmount>
      </PostsHeader>
      <StyledForm onSubmit={handleSubmit(OnSubmit)}>
        <input
          type="text"
          placeholder="Busque pelo user"
          {...register("user", { required: true })}
        />
        <input
          type="text"
          placeholder="Buscar conteúdo do usuário"
          {...register("search")}
        />
        <button type="submit">ENVIAR</button>
      </StyledForm>

      <PostsContainer>
        {issuesData.items?.map((issue) => {
          const dataDesejada = new Date(issue.created_at); // Substitua pela data desejada
          const resultado = converterDataParaTexto(dataDesejada);

          return (
            <PostCard
              title={issue.title}
              description={issue.body}
              created_at={resultado}
            />
          );
        })}
      </PostsContainer>
    </PageContainer>
  );
}
