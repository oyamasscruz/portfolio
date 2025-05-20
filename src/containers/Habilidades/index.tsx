import {
  ContainerHabilidades,
  Habilidade,
  SkillBar,
  SkillItem,
  SkillItems,
  SkillLevel,
  SkillName,
  SubTitulo,
  Titulo,
  DContainer
} from './styles'

const Habilidades = () => {
  return (
    <Habilidade>
      <ContainerHabilidades>
        <Titulo>Minhas Habilidades</Titulo>
        <DContainer>
          <SubTitulo>Linguaguens</SubTitulo>
          <SkillItems>
            <SkillItem>
              <SkillName>
                <i className="fa-brands fa-html5"></i>
                HTML
                <SkillBar>
                  <SkillLevel></SkillLevel>
                </SkillBar>
              </SkillName>
            </SkillItem>
            <SkillItem>
              <SkillName>
                <i className="fa-brands fa-css3-alt"></i>
                CSS
                <SkillBar>
                  <SkillLevel></SkillLevel>
                </SkillBar>
              </SkillName>
            </SkillItem>
            <SkillItem>
              <SkillName>
                <i className="fa-brands fa-js"></i>
                JavaScript
                <SkillBar>
                  <SkillLevel></SkillLevel>
                </SkillBar>
              </SkillName>
            </SkillItem>
            <SkillItem>
              <SkillName>
                <i className="fa-brands fa-js"></i>
                TypeScript
                <SkillBar>
                  <SkillLevel></SkillLevel>
                </SkillBar>
              </SkillName>
            </SkillItem>
            <SkillItem>
              <SkillName>
                <i className="fa-brands fa-react"></i>
                React
                <SkillBar>
                  <SkillLevel></SkillLevel>
                </SkillBar>
              </SkillName>
            </SkillItem>
          </SkillItems>
        </DContainer>
      </ContainerHabilidades>
    </Habilidade>
  )
}

export default Habilidades
