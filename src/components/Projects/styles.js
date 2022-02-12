import styled from "styled-components";
import { defaultTheme } from "../../theme";

export const Container = styled.div`
  display: flex;
  margin-top: 0.5rem;
  height: 15rem;

  button {
    width: 1.5%;
    height: 100%;
    background-color: ${defaultTheme.colors.purple};
    border: none;
    opacity: 0.5;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .carrossel {
    display: flex;
    gap: 0.5rem;
    width: 97%;
    height: 14rem;

    padding: 0.5rem;

    div {
      min-width: 32.8%;
      max-width: 32.8%;
      height: 100%;

      figure {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 92%;
        }

        figcaption {
          background: ${defaultTheme.colors.purple};
          text-align: center;
        }
      }
    }
  }
`;
