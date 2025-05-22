import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Container } from '../../styles'

type LinkProps = {
  ativo?: boolean
}

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

  @media (max-width: 680px) {
    display: none;
  }
`
export const ToggleButton = styled.button`
  display: none;
  background-color: transparent;
  cursor: pointer;
  height: 25px;
  border-radius: 4px;

  @media (max-width: 680px) {
    display: block;
  }
  div {
    height: 5px;
    margin-bottom: 3px;
    width: 30px;
    border-radius: 8px;
    background-color: ${variaveis.textoPrimario};
  }
`

export const Links = styled.li`
  margin-right: 20px;
  cursor: pointer;
  font-weight: bold;
`

export const Linksa = styled.a<LinkProps>`
  text-decoration: none;
  color: ${({ ativo }) => (ativo ? '#64ffda' : '#ffff')};
  border-bottom: ${({ ativo }) => (ativo ? '2px solid #64ffda' : 'none')};

  &:hover {
    border-bottom: 2px solid ${variaveis.enfasePrimario};
    color: ${variaveis.enfasePrimario};
    transition: all ease-in-out 0.3s;
  }
`
export const ListaMobile = styled.ul`
  list-style: none;
  padding: 1rem;
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #121212;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
  li {
    text-align: right;
  }
`
