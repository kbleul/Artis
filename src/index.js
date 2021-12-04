
import React from "react";
import ReactDOM from "react-dom";
import Frontpage from "./frontpage";
import './css/App.css';


export default function App() {
  
    return (<article>
    <Frontpage />
      </article>)
}

ReactDOM.render(<App />, document.getElementById("root"));
