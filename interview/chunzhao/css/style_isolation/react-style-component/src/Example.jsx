import React from 'react';
import styled from 'styled-components';

const ExampleComponent = () => {
// props.children
    return (  
  <StyleExample>
    <p>这里是一个带有styled-components的样式</p>
  </StyleExample>
    )

}

// css in js 解决样式隔离  js 写 css
const StyleExample = styled.div
  `
  padding: 20px;
  border-radius: 10px;
  background-color: green;
  p{
   color: red;
  }
  `;
export default ExampleComponent;

