import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


html {
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif !important;
    
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
div {
  
  //  transition: all .250s;

}

img {
  display: block;
  max-width: 100%;
}

// ::-webkit-scrollbar {
//  display:none;
// }

//unComment These to show scrollbar
::-webkit-scrollbar {
  width: 10px;  
  height:10px;
               
}




::-webkit-scrollbar-thumb {
  background-color: rgba(61, 114, 156, 0.62)!important;    
    // background-color: #737373!important;    
      border:1px solid #f5f5f5; 
  border-radius: 10px;       

}

div:hover::-webkit-scrollbar-corner {
    width: 40px;
    /*background-color: red !important;*/
}
 
`;
export default GlobalStyle;
