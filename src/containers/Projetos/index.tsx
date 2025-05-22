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
  ContainerProjetos
} from './styles'

const Projetos = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <Projeto ref={ref} {...props} id="projetos">
        <ContainerProjetos>
          <Titulo>Projetos em Destaque</Titulo>
          <ListaCard>
            <Card>
              <TituloCard>Interative Github</TituloCard>
              <TextoCard>
                Projeto desenvolvido para poder demonstar o meu gitHub de forma
                diferente
              </TextoCard>
              <AreaDeBotoes>
                <Botoes>Visitar página</Botoes>
                <Botoes>Visitar GitHub</Botoes>
              </AreaDeBotoes>
            </Card>
            <Card>
              <TituloCard>Interative Github</TituloCard>
              <TextoCard>
                Projeto desenvolvido para poder demonstar o meu gitHub de forma
                diferente
              </TextoCard>
              <AreaDeBotoes>
                <Botoes>Visitar página</Botoes>
                <Botoes>Visitar GitHub</Botoes>
              </AreaDeBotoes>
            </Card>
            <Card>
              <TituloCard>Interative Github</TituloCard>
              <TextoCard>
                Projeto desenvolvido para poder demonstar o meu gitHub de forma
                diferente
              </TextoCard>
              <AreaDeBotoes>
                <Botoes>Visitar página</Botoes>
                <Botoes>Visitar GitHub</Botoes>
              </AreaDeBotoes>
            </Card>
          </ListaCard>
          <BotaoTodosProjetos>Ver todos os Projetos</BotaoTodosProjetos>
        </ContainerProjetos>
      </Projeto>
    )
  }
)

Projetos.displayName = 'Projetos'

export default Projetos
