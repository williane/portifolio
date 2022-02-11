import styled from "styled-components";
import { defaultTheme } from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${defaultTheme.colors.purpleOmini};
  opacity: 0.9;

  width: 100%;
  height: 16rem;

  margin-top: 1rem;

  border-radius: 1rem;

  padding: 1rem;
`;
