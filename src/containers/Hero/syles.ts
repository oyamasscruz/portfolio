import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const HomePage = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: ${variaveis.azulBackgroundColor};

  div {
    margin-top: 30vh;
    padding: 0 5rem;
  }
`
export const Imagem = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 8px solid ${variaveis.enfasePrimario};
  box-shadow: 0 0 11px 0;
`
export const Titulo = styled.h2`
  font-size: 3rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const SubTitulo = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;

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
