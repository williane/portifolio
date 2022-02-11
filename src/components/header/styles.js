import styled from "styled-components";
import { defaultTheme } from "../../theme";

export const Div = styled.div`
  position: relative;
  display: flex;
  background-color: ${defaultTheme.colors.purple};

  width: 100%;
  height: 7rem;
  overflow: hidden;

  & > img:nth-child(1) {
    width: 100%;
    height: 300%;
    object-fit: cover;
    object-position: 50% 55%;

    opacity: 0.45;
  }

  & > img:nth-child(2) {
    background-color: transparent;
    position: absolute;
    z-index: 100000;

    right: 18rem;
    top: 0.7rem;

    width: 90px;
    height: 90px;
  }
`;
