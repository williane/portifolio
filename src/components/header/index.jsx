import { Div } from "./styles";
import backgroud from "../../assets/backgroud.jpg";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <Div>
      <img src={backgroud} />
      <img src={logo} />
    </Div>
  );
}

export default Header;
