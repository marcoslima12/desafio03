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

export function Post() {
  return (
    <PageContainer>
      <BoxModel>
        <BoxContent>
          <LinksContainer>
            <StyledLink target="_blank" href="#">
              <CaretLeft size={16} />
              VOLTAR
            </StyledLink>
            <StyledLink target="_blank" href="#">
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
