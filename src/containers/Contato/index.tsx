import {
  ContainerContato,
  FormaDeContato,
  Titulo,
  Cards,
  CardItemGitHub,
  Subtitulo,
  Descricao,
  CardItemLinkedin,
  CardItemInstagram,
  CardItemWhatsapp
} from './styles'

const Contato = () => {
  return (
    <FormaDeContato>
      <ContainerContato>
        <Titulo>Contato</Titulo>
        <Cards>
          <CardItemGitHub>
            <i className="fa-brands fa-github"></i>
            <Subtitulo>GitHub</Subtitulo>
            <Descricao>Veja os meus códigos e projetos</Descricao>
          </CardItemGitHub>
          <CardItemLinkedin>
            <i className="fa-brands fa-linkedin"></i>
            <Subtitulo>LinkedIn</Subtitulo>
            <Descricao>Conecte-se comigo profissionalmente</Descricao>
          </CardItemLinkedin>
          <CardItemInstagram>
            <i className="fa-brands fa-instagram"></i>
            <Subtitulo>Instagram</Subtitulo>
            <Descricao>Siga-me no Instagram</Descricao>
          </CardItemInstagram>
          <CardItemWhatsapp>
            <i className="fa-brands fa-whatsapp"></i>
            <Subtitulo>Whatsapp</Subtitulo>
            <Descricao>Me adicione no Whatsapp e vamos bater um papo</Descricao>
          </CardItemWhatsapp>
        </Cards>
      </ContainerContato>
    </FormaDeContato>
  )
}

export default Contato
