import styled from "styled-components";

export const StyledLink = styled.a`
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
  text-decoration: none;
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem;

  h1 {
    color: var(--base-title, #e7edf4);

    /* Title/Title L */
    font-size: 1.5rem;
    font-family: "Roboto";
    font-weight: 700;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    width: 70%;
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
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

export const IssueBodyContainer = styled.div`
  color: #afc2d4;
  font-size: 1rem;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 160%;
  padding: 2.5rem 2rem;
`;
