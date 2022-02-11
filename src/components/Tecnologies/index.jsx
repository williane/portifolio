import Box from "../Box";
import Tecnology from "../Tecnology";

import { Container } from "./styles";

import js from "../../assets/js.png";
import html from "../../assets/html.png";
import python from "../../assets/python.png";
import react from "../../assets/react.png";
import css from "../../assets/css.png";
import django from "../../assets/django.png";
import java from "../../assets/java.png";
import javascript from "../../assets/javascript.png";
import database from "../../assets/database.png";

function Tecnologies() {
  return (
    <Box title="Tecnologias">
      <Container>
        <Tecnology name="JavaScript" image={js} />
        <Tecnology name="Reactjs" image={react} />
        <Tecnology name="Python" image={python} />
        <Tecnology name="HTML" image={html} />
        <Tecnology name="Nodejs" image={javascript} />
        <Tecnology name="Django" image={django} />
        <Tecnology name="CSS" image={css} />
        <Tecnology name="Java" image={java} />
        <Tecnology name="SQL" image={database} />
      </Container>
    </Box>
  );
}

export default Tecnologies;
