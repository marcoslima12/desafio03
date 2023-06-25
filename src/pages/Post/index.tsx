import { ArrowSquareOut, CaretLeft } from "@phosphor-icons/react";
import { BoxModel } from "../../components/Box";
import { PageContainer } from "../../components/PageContainer";
import {
  BoxContent,
  StyledLink,
  LinksContainer,
  GithubInfoContainer,
} from "./styles";
import { GithubInfo } from "../../components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import search from "antd/es/transfer/search";
import axios from "axios";
import { useEffect, useState } from "react";

/* https://api.github.com/repos/{owner}/{repo}/issues/{issue_number} */

type githubUser = {
  login: string;
};

type IssueType = {
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: githubUser;
};

export function Post() {
  const location = useLocation();
  const { prop } = queryString.parse(location.search);
  const [issue, setIssue] = useState<IssueType>({} as IssueType);

  const getIssue = async () => {
    try {
      const response = await axios.get(`${prop}`);
      setIssue(response.data);
      console.log(issue);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIssue();
  }, []);

  return (
    <PageContainer>
      <BoxModel>
        <BoxContent>
          <LinksContainer>
            <StyledLink href="/">
              <CaretLeft size={16} />
              VOLTAR
            </StyledLink>
            <StyledLink target="_blank" href={issue.html_url}>
              VER NO GITHUB
              <ArrowSquareOut size={16} />
            </StyledLink>
          </LinksContainer>
          <h1>{issue.title}</h1>
          <GithubInfoContainer>
            <GithubInfo infoType="username" username={issue.user?.login} />
            <GithubInfo infoType="issueDate" issueDate={"Há dois anos"} />
            <GithubInfo
              infoType="comments_number"
              comments_number={issue.comments}
            />
          </GithubInfoContainer>
        </BoxContent>
      </BoxModel>
    </PageContainer>
  );
}
