import {
  BotaoContato,
  BotaoProjetos,
  HomePage,
  Imagem,
  SubTitulo,
  TextoHero,
  Titulo
} from './syles'
const Home = () => {
  return (
    <HomePage>
      <div>
        <Titulo>Oyama Cruz</Titulo>
        <SubTitulo>
          Programador <span>Web</span>
        </SubTitulo>
        <TextoHero>
          Criando experiências digitais modernas e funcionais. Esse portifólio é
          um projeto para apresentar um pouco das minhas habilidades de forma
          mais personalizada possível.
        </TextoHero>
        <BotaoProjetos>Ver Projetos</BotaoProjetos>
        <BotaoContato>Contato</BotaoContato>
      </div>
      <div>
        <Imagem
          src="https://avatars.githubusercontent.com/u/148407918?v=4"
          alt="OyamaPerfil"
        />
      </div>
    </HomePage>
  )
}

export default Home
