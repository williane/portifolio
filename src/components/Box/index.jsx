import { Container } from "./styles";

function Box({ title, children, height }) {
  return (
    <Container height={height}>
      <strong>{title}</strong>
      {children}
    </Container>
  );
}

export default Box;
