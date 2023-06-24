import styled from "styled-components";

export const Container = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 10px;
  background: var(--base-post, #112131);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const TitleTimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    color: var(--base-title, #e7edf4);
    font-size: 1.25rem;
    font-family: "Roboto", sans-serif;

    font-weight: 700;
    flex: 1;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  p {
    color: var(--base-span, #7b96b2);
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const Description = styled.p`
  color: #afc2d4;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
`;
