import { Container } from "./styles";

function Box({ title, children }) {
  return (
    <Container>
      <strong>{title}</strong>
      {children}
    </Container>
  );
}

export default Box;
