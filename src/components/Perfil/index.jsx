import { Container, PerfilWrapper, SocialMediaWrapper } from "./styles";
import { ImLocation } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";

import will from "../../assets/will.jpg";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

function Perfil() {
  return (
    <Container>
      <PerfilWrapper>
        <div>
          <img src={will} alt="Will" />
        </div>
        <strong>Williane Marques</strong>
        <span>Analista de sistemas PL|DHL</span>
        <span>
          <ImLocation />
          &nbsp;Jundiai, SP, Brasil
        </span>
        <span>
          <HiOutlineMail />
          &nbsp;williane.tads@gmail.com
        </span>
        <span>
          <FaUniversity />
          &nbsp;Analise e Dev. de Sistemas
        </span>
      </PerfilWrapper>
      <SocialMediaWrapper>
        <img src={github} alt="Github" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={instagram} alt="Instagram" />
      </SocialMediaWrapper>
    </Container>
  );
}

export default Perfil;
