import { Container } from "./styles";

function Tecnology({ image, name }) {
  return (
    <Container>
      <div className="image">
        <img src={image} alt={name} />
      </div>

      <div>
        <strong>{name}</strong>
        <div className="box-content">
          <div className="load"></div>
        </div>
      </div>
    </Container>
  );
}

export default Tecnology;
