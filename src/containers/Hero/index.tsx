import { forwardRef } from 'react'
import {
  BotaoContato,
  BotaoProjetos,
  HomePage,
  Imagem,
  SubTitulo,
  TextoHero,
  Titulo,
  ContainerHero
} from './syles'
const Home = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <HomePage ref={ref} id="hero" {...props}>
        <ContainerHero>
          <div>
            <Titulo>Oyama Cruz</Titulo>
            <SubTitulo>
              Programador <span>Web</span>
            </SubTitulo>
            <TextoHero>
              Criando experiências digitais modernas e funcionais. Esse
              portifólio é um projeto para apresentar um pouco das minhas
              habilidades de forma mais personalizada possível.
            </TextoHero>
            <a href="#projetos">
              <BotaoProjetos>Ver Projetos</BotaoProjetos>
            </a>
            <a href="#contato">
              <BotaoContato>Contato</BotaoContato>
            </a>
          </div>
          <div>
            <Imagem>
              <img
                src="https://avatars.githubusercontent.com/u/148407918?v=4"
                alt="OyamaPerfil"
              />
            </Imagem>
          </div>
        </ContainerHero>
      </HomePage>
    )
  }
)

Home.displayName = 'Home'

export default Home
