import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* const root = ReactDOM.createRoot(document.getElementById("root"));
const x = React.createElement("p", null, "hola mundo"); //<p>hola mundo</p>

const Li = ({ children, estado, casa, edad }) => {
  console.log(casa, edad)
  return (
    <li>
      {children} estoy {estado}
    </li>
  );
};
const Y = () => (
  <ul>
    <Li estado={"feliz"} casa={false} edad={24}>
      Chanchito
    </Li>
    <Li estado={'triste'}>Chanchito</Li>
    <Li estado={'enojado'}>Chanchito</Li>
    <Li estado={'molesto'}>Chanchito</Li>
  </ul>
);

root.render(
  //Encargado de renderizar las aplicaciones en react
  <Y />,
  document.getElementById("root")
);
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
