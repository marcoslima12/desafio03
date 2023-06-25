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

/* https://api.github.com/repos/{owner}/{repo}/issues/{issue_number}  */

export function Post() {



  const location = useLocation();
  const {prop} = queryString.parse(location.search);

  return (
    <PageContainer>
      <BoxModel>
        <BoxContent>
          <LinksContainer>
            <StyledLink href='/'>
              <CaretLeft size={16} />
              VOLTAR
            </StyledLink>
            <StyledLink target="_blank" href={prop?.toString()}>
              VER NO GITHUB
              <ArrowSquareOut size={16} />
            </StyledLink>
          </LinksContainer>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde hic
          </h1>
          <GithubInfoContainer>
            <GithubInfo infoType="username" username={'marcoslim12'} />

            <GithubInfo infoType="issueDate" issueDate={'Há dois anos'} />

            <GithubInfo
              infoType="comments_number"
              comments_number={19}
            />
          </GithubInfoContainer>
        </BoxContent>
      </BoxModel>
    </PageContainer>
  );
}
