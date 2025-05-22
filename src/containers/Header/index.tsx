import { useState } from 'react'
import {
  Menu,
  ListaDeLinks,
  Titulo,
  Links,
  Linksa,
  ContainerHeader,
  ToggleButton,
  ListaMobile
} from './styles'

type HeaderProps = {
  sectionAtiva: string
}

const Header = ({ sectionAtiva }: HeaderProps) => {
  const [menuAberto, setMenuAberto] = useState(false)

  const toggleButton = () => {
    setMenuAberto(!menuAberto)
  }
  return (
    <Menu>
      <ContainerHeader>
        <Titulo>Meu Portfólio</Titulo>
        <ToggleButton onClick={toggleButton}>
          <div></div>
          <div></div>
          <div></div>
        </ToggleButton>
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
        {menuAberto && (
          <ListaMobile>
            <Links>
              <Linksa
                onClick={toggleButton}
                href="#hero"
                ativo={sectionAtiva === 'hero'}
              >
                Home
              </Linksa>
            </Links>
            <Links>
              <Linksa
                onClick={toggleButton}
                href="#projetos"
                ativo={sectionAtiva === 'projetos'}
              >
                Projetos
              </Linksa>
            </Links>
            <Links>
              <Linksa
                onClick={toggleButton}
                href="#habilidades"
                ativo={sectionAtiva === 'habilidades'}
              >
                Habilidades
              </Linksa>
            </Links>
            <Links>
              <Linksa
                onClick={toggleButton}
                href="#contato"
                ativo={sectionAtiva === 'contato'}
              >
                Contato
              </Linksa>
            </Links>
          </ListaMobile>
        )}
      </ContainerHeader>
    </Menu>
  )
}

export default Header
