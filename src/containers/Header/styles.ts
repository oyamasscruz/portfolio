import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  align-items: center;
  position: fixed;
  background-color: rgba(18, 18, 18, 0.9);
  backdrop-filter: blur(10px);
  width: 100%;
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
