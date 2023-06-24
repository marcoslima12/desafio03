import { Container, Description, TitleTimeContainer } from "./styles";

export function PostCard() {
  return (
    <Container>
      <TitleTimeContainer>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis nam numquam laborum voluptatem, rerum necessitatibus beatae labore hic cupiditate enim amet! Aliquid vero nisi, laudantium sed reiciendis numquam molestias!</h1>
        <p>Há 1 dia</p>
      </TitleTimeContainer>
      <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          hic impedit laudantium! Tenetur debitis, ex excepturi perferendis sed
          ipsa cumque similique temporibus quaerat ipsum, non adipisci neque rem
          voluptas. Saepe.
        </Description>
    </Container>
  );
}
