import { Link } from "react-router-dom";
import querySring from "query-string";
import { Container, Description, TitleTimeContainer } from "./styles";
import queryString from "query-string";
import ReactMarkdown from "react-markdown";

interface PostProps {
  title: string;
  description: string;
  created_at: string;
  toGithub_url: string;
}

export function PostCard(props: PostProps) {
  const query = queryString.stringify({ prop: props.toGithub_url });
  const url = `/post?${query}`;

  return (
    <Link
      to={url}
      style={{
        textDecoration: "none",
      }}
    >
      <Container>
        <TitleTimeContainer>
          <h1>{props.title}</h1>
          <p>Há {props.created_at}</p>
        </TitleTimeContainer>
        <Description>
          {<ReactMarkdown>{props.description}</ReactMarkdown> ||
            "Description here"}
        </Description>
      </Container>
    </Link>
  );
}
