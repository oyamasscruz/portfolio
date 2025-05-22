import { forwardRef } from 'react'
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
  CardItemWhatsapp,
  Link
} from './styles'

const Contato = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <FormaDeContato ref={ref} {...props} id="contato">
        <ContainerContato>
          <Titulo>Contato</Titulo>
          <Cards>
            <Link
              href="https://github.com/oyamasscruz"
              target="_blank"
              rel="noreferrer"
            >
              <CardItemGitHub>
                <i className="fa-brands fa-github"></i>
                <Subtitulo>GitHub</Subtitulo>
                <Descricao>Veja os meus códigos e projetos</Descricao>
              </CardItemGitHub>
            </Link>
            <Link
              href="https://www.linkedin.com/in/oyama-cruz/"
              target="_blank"
              rel="noreferrer"
            >
              <CardItemLinkedin>
                <i className="fa-brands fa-linkedin"></i>
                <Subtitulo>LinkedIn</Subtitulo>
                <Descricao>Conecte-se comigo profissionalmente</Descricao>
              </CardItemLinkedin>
            </Link>
            <Link
              href="https://www.instagram.com/oyamasscruz/"
              target="_blank"
              rel="noreferrer"
            >
              <CardItemInstagram>
                <i className="fa-brands fa-instagram"></i>
                <Subtitulo>Instagram</Subtitulo>
                <Descricao>Siga-me no Instagram</Descricao>
              </CardItemInstagram>
            </Link>
            <Link
              href="https://wa.me/5562992113288"
              target="_blank"
              rel="noreferrer"
            >
              <CardItemWhatsapp>
                <i className="fa-brands fa-whatsapp"></i>
                <Subtitulo>Whatsapp</Subtitulo>
                <Descricao>
                  Me adicione no Whatsapp e vamos bater um papo
                </Descricao>
              </CardItemWhatsapp>
            </Link>
          </Cards>
        </ContainerContato>
      </FormaDeContato>
    )
  }
)

Contato.displayName = 'Contato'

export default Contato
