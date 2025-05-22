import styled from 'styled-components'
import { Container, H2, H3 } from '../../styles'
import variaveis from '../../styles/variaveis'

export const Habilidade = styled.section`
  padding: 80px 0;
  background-color: ${variaveis.azulBackgroundColor};
`

export const ContainerHabilidades = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
`

export const Titulo = styled(H2)`
  margin-bottom: 2rem;

  @media (max-width: 430px) {
    text-align: center;
  }
`

export const DContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const SubTitulo = styled(H3)`
  color: ${variaveis.enfasePrimario};
  margin-bottom: 1.5rem;
`
export const SkillItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`
export const SkillItem = styled.div`
  margin-bottom: 15px;
`

export const SkillName = styled.span`
  margin-bottom: 10px;
  font-weight: 500;
  display: block;
  i {
    margin-right: 10px;
    color: ${variaveis.rosaPink};
  }
`
export const SkillBar = styled.div`
  height: 10px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  over-flow: hidden;
`

export const SkillLevelHTML = styled.div`
  height: 100%;
  background-color: ${variaveis.enfasePrimario};
  width: 90%;
`
export const SkillLevelCSS = styled(SkillLevelHTML)`
  width: 80%;
`

export const SkillLevelJS = styled(SkillLevelHTML)`
  width: 70%;
`

export const SkillLevelTS = styled(SkillLevelHTML)`
  width: 60%;
`
export const SkillLevelRCT = styled(SkillLevelHTML)`
  width: 50%;
`
