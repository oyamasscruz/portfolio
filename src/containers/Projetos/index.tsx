import {
  Projeto,
  Titulo,
  ListaCard,
  Card,
  TituloCard,
  TextoCard
} from './styles'

const Projetos = () => {
  return (
    <Projeto>
      <Titulo>Projetos em Destaque</Titulo>
      <ListaCard>
        <Card>
          <TituloCard>Interative Github</TituloCard>
          <TextoCard>
            Projeto desenvolvido para poder demonstar o meu gitHub de forma
            diferente
          </TextoCard>
          <button>Visitar página</button>
          <button>Visitar GitHub</button>
        </Card>
        <Card>
          <TituloCard>Interative Github</TituloCard>
          <TextoCard>
            Projeto desenvolvido para poder demonstar o meu gitHub de forma
            diferente
          </TextoCard>
          <button>Visitar página</button>
          <button>Visitar GitHub</button>
        </Card>
        <Card>
          <TituloCard>Interative Github</TituloCard>
          <TextoCard>
            Projeto desenvolvido para poder demonstar o meu gitHub de forma
            diferente
          </TextoCard>
          <button>Visitar página</button>
          <button>Visitar GitHub</button>
        </Card>
      </ListaCard>
    </Projeto>
  )
}

export default Projetos
