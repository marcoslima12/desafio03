import { Container, Description, TitleTimeContainer } from "./styles";


interface PostProps{
  title: string;
  description: string;
  created_at: string;
}

export function PostCard(props: PostProps) {
  return (
    <Container>
      <TitleTimeContainer>
        <h1>{props.title}</h1>
        <p>Há {props.created_at}</p>
      </TitleTimeContainer>
      <Description>
        {props.description || 'Description here'}
        </Description>
    </Container>
  );
}
