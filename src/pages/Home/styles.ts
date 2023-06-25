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

export const PostsTitle = styled.h1`
  color: var(--base-subtitle, #c4d4e3);

  /* Title / Title S */
  font-size: 1.125rem;
  font-family: "Roboto", sans-serif;

  font-weight: 700;
  line-height: 160%;
`;

export const PostsAmount = styled.h3`
  color: var(--base-span, #7b96b2);
  text-align: right;

  /* Text/Text S */
  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;

  line-height: 160%;
`;

export const PostsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.5rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 10rem;
  input {
    box-sizing: border-box;
    padding: 0.75rem 0 0.75rem 1rem;
    width: inherit;
    border-radius: 6px;
    border: 1px solid var(--base-border, #1c2f41);
    background: var(--base-input, #040f1a);
    ::placeholder {
      color: var(--base-label, #3a536b);
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
    }
    color: var(--base-label, #3a536b);
    font-size: 1rem;
    font-family: "Roboto", sans-serif;

    &:first-child {
      width: 40%;
    }
  }
  button {
    cursor: pointer;
    width: 40%;
    box-sizing: border-box;
    padding: 0.75rem 0 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid var(--base-border, #1c2f41);
    background: var(--base-input, #040f1a);
    color: var(--base-label, #3a536b);
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const PostsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 3rem;
  padding-bottom: 5rem;
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  //flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
