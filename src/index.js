
import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Frontpage from "./frontpage";
import './css/App.css';


export default function App() {
  
    return (<article>
        <Header />
    <Frontpage />
      </article>)
}

ReactDOM.render(<App />, document.getElementById("root"));
