import Header from "../../components/header";
import Perfil from "../../components/Perfil";
import About from "../../components/About";
import Tecnologies from "../../components/Tecnologies";
import Projects from "../../components/Projects";
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
          <Projects />
        </AboutContainer>
      </Container>
    </>
  );
}

export default App;
