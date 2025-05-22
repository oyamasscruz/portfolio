import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Container, H2 } from '../../styles'

export const HomePage = styled.section`
  padding: 80px 0;
  background-color: ${variaveis.azulBackgroundColor};
`
export const ContainerHero = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 70vh;
  @media (max-width: 1280px) {
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
  }
  @media (max-width: 1024px) {
    height: auto;
  }
`

export const Imagem = styled.div`
  padding: 0 5rem;
  border: 8px solid ${variaveis.enfasePrimario};
  box-shadow: 0 0 11px 0;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    animation: pulsar 1.8s ease-in-out;
  }
  @media (max-width: 1280px) {
    padding: 0 3rem;
    width: 200px;
    height: 200px;
  }
    @media (max-width: 1024px) {
    margin-top: 40px;
  }

  @keyframes pulsar {
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 20px 5px ${variaveis.enfasePrimario};
    }
  }

  img {
    top: 0;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    @media (max-width: 1280px) {
    width: 180px;
    height: 180px;
  }
`
export const Titulo = styled.h1`
  font-size: 3rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const SubTitulo = styled(H2)`
  margin-bottom: 1rem;

  span {
    color: ${variaveis.enfasePrimario};
  }
`

export const TextoHero = styled.p`
  color: ${variaveis.textoSecundario};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`
export const BotaoProjetos = styled.button`
  text-decoration: none;
  padding: 12px 24px;
  margin-right: 16px;
  background-color: ${variaveis.enfasePrimario};
  color: ${variaveis.azulBackgroundColor};
  font-weight: 700;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    transition: ease-in-out 0.4s;
  }
`

export const BotaoContato = styled(BotaoProjetos)`
  background-color: ${variaveis.azulBackgroundColor};
  color: ${variaveis.enfasePrimario};
  border: 2px solid ${variaveis.enfasePrimario};
  &:hover {
    background-color: ${variaveis.enfasePrimario};
    color: ${variaveis.azulBackgroundColor};
    border: none;
  }
`
