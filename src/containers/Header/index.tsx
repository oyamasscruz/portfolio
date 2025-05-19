import { Menu, ListaDeLinks, Titulo, Links, Linksa } from './styles'

const Header = () => {
  return (
    <Menu>
      <Titulo>Meu Portifólio</Titulo>
      <ListaDeLinks>
        <Links>
          <Linksa>Home</Linksa>
        </Links>
        <Links>
          <Linksa>Projetos</Linksa>
        </Links>
        <Links>
          <Linksa>Habilidades</Linksa>
        </Links>
        <Links>
          <Linksa>Contato</Linksa>
        </Links>
      </ListaDeLinks>
    </Menu>
  )
}

export default Header
