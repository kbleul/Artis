import ReactDOM from 'react-dom';
import './css/App.css';
import Header from './header';
import MainContain from './frontpage';

function Top() {
    return (
  <article id="main_wrapper" >
    <Header />
    <MainContain />
  </article>)
}

 ReactDOM.render(<Top /> , document.getElementById("root") );