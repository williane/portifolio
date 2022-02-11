import Header from "../../components/header";
import Perfil from "../../components/Perfil";
import Tecnologies from "../../components/Tecnologies";
import About from "../../components/About";
import { AboutContainer, Container } from "./styles";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Perfil />
        <AboutContainer>
          <About />
          <Tecnologies />
        </AboutContainer>
      </Container>
    </>
  );
}

export default App;
