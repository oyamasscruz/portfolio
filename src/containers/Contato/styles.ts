import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Container, H2, H3 } from '../../styles'

export const FormaDeContato = styled.section`
  background-color: ${variaveis.azulSecundario};
  padding: 80px 0;
`
export const ContainerContato = styled(Container)`
  text-align: center;
  height: 70vh;

  @media (max-width: 1280px) {
    height: 80vh;
  }
  @media (max-width: 1024px) {
    height: auto;
  }
`
export const Titulo = styled(H2)`
  margin-bottom: 2rem;
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Link = styled.a`
  text-decoration: none;
`

export const CardItemGitHub = styled.div`
  background-color: ${variaveis.corDoCard};
  height: 280px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-top: 6px solid #000;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 6px 8px #000;
    transform: translateY(-10px);
  }

  i {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #000;
  }
`

export const CardItemLinkedin = styled(CardItemGitHub)`
  border-top: 6px solid #0a66c2;
  &:hover {
    box-shadow: 2px 6px 8px #0a66c2;
  }
  i {
    color: #0a66c2;
  }
`
export const CardItemInstagram = styled(CardItemGitHub)`
  border-top: 6px solid ${variaveis.rosaPink};
  &:hover {
    box-shadow: 2px 6px 8px ${variaveis.rosaPink};
  }

  i {
    color: ${variaveis.rosaPink};
  }
`

export const CardItemWhatsapp = styled(CardItemGitHub)`
  border-top: 6px solid #128c7e;
  &:hover {
    box-shadow: 2px 6px 8px #128c7e;
  }

  i {
    color: #128c7e;
  }
`

export const Subtitulo = styled(H3)`
  margin-bottom: 1rem;
`

export const Descricao = styled.span`
  text-align: center;
  line-height: 1.6;
  color: ${variaveis.textoSecundario};
`
