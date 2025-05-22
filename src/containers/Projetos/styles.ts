import styled from 'styled-components'
import { Container, H2, H3 } from '../../styles'
import variaveis from '../../styles/variaveis'
import { BotaoContato } from '../Hero/syles'

export const Projeto = styled.section`
  background-color: ${variaveis.azulSecundario};
  padding: 80px 0;
`

export const ContainerProjetos = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 70vh;
  @media (max-width: 1280px) {
    height: 80vh;
  }
  @media (max-width: 1024px) {
    height: auto;
  }
`

export const Titulo = styled(H2)`
  text-align: center;
  margin-bottom: 2rem;
`

export const ListaCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
export const Card = styled.div`
  padding: 30px;
  background-color: ${variaveis.corDoCard};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border-left: 4px solid ${variaveis.enfaseSecundario};
  @media (max-width: 768px) {
    display: block;
  }
`

export const TituloCard = styled(H3)`
  margin-bottom: 20px;
`

export const TextoCard = styled.p`
  font-size: 1rem;
  color: ${variaveis.textoSecundario};
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 18px;
  flex-grow: 1;
`

export const AreaDeBotoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const Botoes = styled.button`
  padding: 6px 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
  @media (max-width: 480px) {
    margin-right: 16px;
  }
`

export const BotaoTodosProjetos = styled(BotaoContato)`
  padding: 6px 12px;
  text-align: center;
  margin-top: 40px;
`
