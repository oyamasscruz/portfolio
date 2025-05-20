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

const Projetos = () => {
  return (
    <Projeto>
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

export default Projetos
