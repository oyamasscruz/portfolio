import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Container } from '../../styles'

export const Menu = styled.header`
  width: 100%;
  background-color: rgba(18, 18, 18, 0.9);
  position: fixed;
  padding: 20px 0;
`

export const ContainerHeader = styled(Container)`
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
`

export const Titulo = styled.h1`
  color: ${variaveis.enfasePrimario};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
`

export const ListaDeLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 1rem;
`
export const Links = styled.li`
  margin-right: 20px;
  cursor: pointer;
  font-weight: bold;
`

export const Linksa = styled.a`
  &:hover {
    border-bottom: 2px solid ${variaveis.enfasePrimario};
    color: ${variaveis.enfasePrimario};
    transition: all ease-in-out 0.3s;
  }
`
