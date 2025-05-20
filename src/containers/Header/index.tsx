import {
  Menu,
  ListaDeLinks,
  Titulo,
  Links,
  Linksa,
  ContainerHeader
} from './styles'

const Header = () => {
  return (
    <Menu>
      <ContainerHeader>
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
      </ContainerHeader>
    </Menu>
  )
}

export default Header
