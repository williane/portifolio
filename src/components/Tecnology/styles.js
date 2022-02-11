import styled from "styled-components";
import { defaultTheme } from "../../theme";

export const Container = styled.div`
  display: flex;
  gap: 0.25rem;

  width: 15rem;

  .image {
    width: 4rem;
    height: 3rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    width: 100%;

    strong {
      font-size: 1rem;
      margin-top: 0.25rem;
      margin-left: 0.3rem;
    }

    .box-content {
      width: 100%;
      height: 1rem;
      border: 2px solid #000000;

      .load {
        width: 80%;
        height: 0.9rem;
        background-color: ${defaultTheme.colors.purple};
      }
    }
  }
`;
