import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Projeto = styled.section`
  height: 100vh;
  background-color: ${variaveis.azulSecundario};
  display: flex;
  flex-direction: column;
  padding: 80px 0;
`

export const Titulo = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 2rem;
`

export const ListaCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  padding: 30px;
`
export const Card = styled.div`
  padding: 30px;
  background-color: ${variaveis.azulBackgroundColor};
  height: 100%;
  border-radius: 8px;
  border-left: 4px solid ${variaveis.enfaseSecundario};
`

export const TituloCard = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
`

export const TextoCard = styled.p`
  font-size: 1rem;
  color: ${variaveis.textoSecundario};
  margin-bottom: 20px;
  line-height: 1.6;
`
