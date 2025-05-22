import {
  Menu,
  ListaDeLinks,
  Titulo,
  Links,
  Linksa,
  ContainerHeader
} from './styles'

type HeaderProps = {
  sectionAtiva: string
}

const Header = ({ sectionAtiva }: HeaderProps) => {
  return (
    <Menu>
      <ContainerHeader>
        <Titulo>Meu Portifólio</Titulo>
        <ListaDeLinks>
          <Links>
            <Linksa href="#hero" ativo={sectionAtiva === 'hero'}>
              Home
            </Linksa>
          </Links>
          <Links>
            <Linksa href="#projetos" ativo={sectionAtiva === 'projetos'}>
              Projetos
            </Linksa>
          </Links>
          <Links>
            <Linksa href="#habilidades" ativo={sectionAtiva === 'habilidades'}>
              Habilidades
            </Linksa>
          </Links>
          <Links>
            <Linksa href="#contato" ativo={sectionAtiva === 'contato'}>
              Contato
            </Linksa>
          </Links>
        </ListaDeLinks>
      </ContainerHeader>
    </Menu>
  )
}

export default Header
