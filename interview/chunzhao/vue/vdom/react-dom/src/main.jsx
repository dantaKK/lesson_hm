import React from "react";
import {createRoot} from "react-dom/client";

function App() {
  return React.createElement(
     'div',
     {id:'app'},
     'Hello World!',
  )
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);