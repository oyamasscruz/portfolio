import { useEffect, useRef, useState } from 'react'
import Contato from './containers/Contato'
import Footer from './containers/Footer'
import Habilidades from './containers/Habilidades'
import Header from './containers/Header/index'
import Home from './containers/Hero'
import Projetos from './containers/Projetos'
import EstiloGlobal from './styles'

function App() {
  const [sectionAtiva, setSectionAtiva] = useState<string>('hero')

  const heroRef = useRef<HTMLElement>(null)
  const projetosRef = useRef<HTMLElement>(null)
  const habilidadesRef = useRef<HTMLElement>(null)
  const contatoRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sections = [
      { id: 'hero', ref: heroRef },
      { id: 'projetos', ref: projetosRef },
      { id: 'habilidades', ref: habilidadesRef },
      { id: 'contato', ref: contatoRef }
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setSectionAtiva(id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [])

  return (
    <>
      <EstiloGlobal />
      <Header sectionAtiva={sectionAtiva} />
      <Home ref={heroRef} id="hero" />
      <Projetos ref={projetosRef} id="projetos" />
      <Habilidades ref={habilidadesRef} id="habilidades" />
      <Contato ref={contatoRef} id="contato" />
      <Footer />
    </>
  )
}

export default App
