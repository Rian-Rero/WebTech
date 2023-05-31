import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Black.ttf";

export const Imagem = styled.image`
  font-size: 2200%;
  color: white;
  height: 60%;
  @media screen and (max-width: 342px) {
    font-size: 1500%;
    > img {
      width: 100%;
    }
  }
`;
export const Body = styled.div`
  font-family: "Poppins";
  height: 100%;
`;
export const Caixa = styled.div`
  display: flex;
  width: 60%;
  height: 40%;
  margin-bottom: 90px;
  @media screen and (max-width: 838px) {
  }
`;

export const Coluna = styled.div`
  font-family: "Poppins";
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 92%;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 860px) {
    width: 100%;
    margin-left: 0px;
  }
  @media screen and (max-width: 574px) {
    flex-direction: column;
  }
`;

export const Coluna2 = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 860) {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0;
    margin-top: 60px;
  }
  @media screen and (max-width: 860px) {
    width: 100%;
  }
  @media screen and (max-width: 574px) {
  }
  @media (max-width: 390px) {
  }
`;

export const DivGeral = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #0a0a30;
  height: 100vh;
  @media screen and (max-width: 860px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    gap: 70px;
  }
`;
export const Nome = styled.text`
  font-family: "Poppins";
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  height: 55px;
  background: transparent;
  border-radius: 20px;
  border: solid 2px white;
  color: white;
  color: white;
  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
  }
`;

export const Texto = styled.text`
  text-align: center;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "Poppins";
  height: 292px;
  background: transparent;
  border: solid 2px white;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  @media (max-width: 664px) {
    font-size: 15px;
  }
  @media (max-width: 574px) {
  }

  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
  }
`;
export const Linha2 = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #09082f;
  width: 100%;
`;
export const Dados = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  text-align: center;
  font-size: 18px;
  height: 100%;
  width: 60%;
  gap: 20px;
  @media screen and (max-width: 860px) {
  }
  @media screen and (max-width: 574) {
  }
`;
export const Logo = styled.div`
  display: flex;
  text-align: end;
  justify-content: end;
  align-items: end;
  background-color: #2f2e6f;
`;
export const Canais = styled.text`
  text-align: center;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 150%;
  font-family: "Poppins";
  height: 70px;
  background: transparent;
  border: solid 2px white;
  border-radius: 20px;
  color: white;
  font-size: 18px;

  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
  }
`;
export const Imagem2 = styled.div`
  width: 130%;
  @media screen and (max-width: 860px) {
    display: none;
  }
`;
