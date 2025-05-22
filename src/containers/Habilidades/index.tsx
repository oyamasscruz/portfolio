import { forwardRef } from 'react'
import {
  ContainerHabilidades,
  Habilidade,
  SkillBar,
  SkillItem,
  SkillItems,
  SkillName,
  SubTitulo,
  Titulo,
  DContainer,
  SkillLevelHTML,
  SkillLevelCSS,
  SkillLevelJS,
  SkillLevelTS,
  SkillLevelRCT
} from './styles'

const Habilidades = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <Habilidade ref={ref} id="habilidades" {...props}>
        <ContainerHabilidades>
          <Titulo>Minhas Habilidades</Titulo>
          <DContainer>
            <SubTitulo>Linguaguens</SubTitulo>
            <SkillItems>
              <SkillItem>
                <SkillName>
                  <i className="fa-brands fa-html5"></i>
                  HTML - 90%
                  <SkillBar>
                    <SkillLevelHTML></SkillLevelHTML>
                  </SkillBar>
                </SkillName>
              </SkillItem>
              <SkillItem>
                <SkillName>
                  <i className="fa-brands fa-css3-alt"></i>
                  CSS - 80%
                  <SkillBar>
                    <SkillLevelCSS></SkillLevelCSS>
                  </SkillBar>
                </SkillName>
              </SkillItem>
              <SkillItem>
                <SkillName>
                  <i className="fa-brands fa-js"></i>
                  JavaScript - 70%
                  <SkillBar>
                    <SkillLevelJS></SkillLevelJS>
                  </SkillBar>
                </SkillName>
              </SkillItem>
              <SkillItem>
                <SkillName>
                  <i className="fa-brands fa-js"></i>
                  TypeScript - 60%
                  <SkillBar>
                    <SkillLevelTS></SkillLevelTS>
                  </SkillBar>
                </SkillName>
              </SkillItem>
              <SkillItem>
                <SkillName>
                  <i className="fa-brands fa-react"></i>
                  React - 50%
                  <SkillBar>
                    <SkillLevelRCT></SkillLevelRCT>
                  </SkillBar>
                </SkillName>
              </SkillItem>
            </SkillItems>
          </DContainer>
        </ContainerHabilidades>
      </Habilidade>
    )
  }
)

Habilidades.displayName = 'Habilidades'

export default Habilidades
