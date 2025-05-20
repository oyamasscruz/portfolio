import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
  margin:0;
  padding:0;
  box-sizing: border-box;
  color: ${variaveis.textoPrimario};
  font-family: 'Roboto', sans-serif;
  line-height:1.6;
}
`

export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  padding: 0 20px;
  margin: 0 auto;
  align-items: center;
`

export const H2 = styled.h2`
  font-size: 2.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`
export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`
export default EstiloGlobal
