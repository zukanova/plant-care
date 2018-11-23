import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Muli:400,400i,800');

* {
  box-sizing: border-box;
}

body {
  height: 100Vh;    
  margin: 0;
  padding: 0;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
