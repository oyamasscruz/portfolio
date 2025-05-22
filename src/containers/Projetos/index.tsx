import { forwardRef } from 'react'
import {
  Projeto,
  Titulo,
  ListaCard,
  Card,
  TituloCard,
  TextoCard,
  AreaDeBotoes,
  Botoes,
  BotaoTodosProjetos,
  ContainerProjetos,
  Imagem
} from './styles'

import favoriteMovies from '../../assets/favorites-movies.png'
import cloneDisney from '../../assets/clone-disney.png'
import theGodFather from '../../assets/the-god-father.png'

const Projetos = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <Projeto ref={ref} {...props} id="projetos">
        <ContainerProjetos>
          <Titulo>Projetos em Destaque</Titulo>
          <ListaCard>
            <Card>
              <Imagem src={favoriteMovies}></Imagem>
              <TituloCard>Filmes Favoritos</TituloCard>
              <TextoCard>
                Projeto desenvolvido para poder aplicar um pouco do meu
                conhecimento em JavaScript. Espero que goste, adicione e delete
                os seus filmes favoritos.
              </TextoCard>
              <AreaDeBotoes>
                <a
                  href="https://favorites-movies.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Botoes>Visitar página</Botoes>
                </a>
                <a
                  href="https://github.com/oyamasscruz/favorites_Movies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Botoes>Visitar GitHub</Botoes>
                </a>
              </AreaDeBotoes>
            </Card>
            <Card>
              <Imagem src={cloneDisney}></Imagem>
              <TituloCard>Clone do Disney+</TituloCard>
              <TextoCard>
                Conhecimento aplicado, para demonstrar um pouco do conhecimento.
              </TextoCard>
              <AreaDeBotoes>
                <a
                  href="https://clone-disneyplus-weld-beta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Botoes>Visitar página</Botoes>
                </a>
                <a
                  href="https://github.com/oyamasscruz/clone_disneyplus/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Botoes>Visitar GitHub</Botoes>
                </a>
              </AreaDeBotoes>
            </Card>
            <Card>
              <Imagem src={theGodFather}></Imagem>
              <TituloCard>O Poderoso Chefão</TituloCard>
              <TextoCard>
                Projeto desenvolvido aplicar diversas áreas de conhecimento,
                tentando trabalhar um pouco da minha criatividade também
              </TextoCard>
              <AreaDeBotoes>
                <a
                  href="https://the-godfather-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Botoes>Visitar página</Botoes>
                </a>
                <a
                  href="https://github.com/oyamasscruz/the_godfather"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Botoes>Visitar GitHub</Botoes>
                </a>
              </AreaDeBotoes>
            </Card>
          </ListaCard>
          <a
            href="https://github.com/oyamasscruz"
            target="_blank"
            rel="noreferrer"
          >
            <BotaoTodosProjetos>Ver todos os Projetos</BotaoTodosProjetos>
          </a>
        </ContainerProjetos>
      </Projeto>
    )
  }
)

Projetos.displayName = 'Projetos'

export default Projetos
