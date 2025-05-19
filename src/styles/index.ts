import { createGlobalStyle } from 'styled-components'
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
export default EstiloGlobal
