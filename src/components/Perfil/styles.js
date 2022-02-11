import styled from "styled-components";
import { defaultTheme } from "../../theme";

export const Container = styled.div`
  background-color: ${defaultTheme.colors.purpleOmini};
  width: 18rem;
  height: 55rem;

  border-radius: 1rem;

  opacity: 0.9;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;

  margin-top: -2rem;
`;

export const PerfilWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 10rem;
    height: 10rem;

    border-radius: 50%;

    background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);

    overflow: hidden;

    margin-top: 2rem;

    & > img {
      width: 95%;
      height: 95%;
      object-fit: cover;
      object-position: 50% 15%;

      border-radius: 50%;
      border: 5px solid ${defaultTheme.colors.purpleOmini};
    }
  }

  & > strong {
    background-color: transparent;
    font-weight: bold;
    font-size: 1.2rem;

    margin-top: 1rem;
  }

  & > span {
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;

  & > img {
    width: 40px;
    height: 40px;
  }
`;
