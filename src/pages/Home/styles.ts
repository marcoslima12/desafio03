import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--base-background, #071422);
`;

export const StyledImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`;

export const UserName = styled.h3`
  color: var(--base-title, #e7edf4);
  font-size: 1.5rem;
  font-family: Nunito;
  font-family: "Roboto", sans-serif;

  font-weight: 700;
  //line-height: 130%;
  margin: auto 0;
`;

export const Content = styled.div`
  margin: auto;
  max-width: 54rem;
`;

export const BoxContent = styled.div`
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ContentInfo = styled.div`
  flex: 1;

  p {
    color: var(--base-text, #afc2d4);

    /* Text/Text M */
    font-size: 1rem;
    font-family: Nunito;
    font-family: "Roboto", sans-serif;

    //line-height: 160%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  //align-items: center;
`;

export const GitHubLink = styled.a`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  color: var(--brand-blue, #3294f8);

  /* Components/Link */
  font-size: 0.75rem;
  font-family: Nunito;
  font-family: "Roboto", sans-serif;

  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
`;

export const NameGithubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GithubInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
`;
