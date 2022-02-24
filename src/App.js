import './App.css';
import  { Capa }  from './components/Capa';
import { Main } from './components/Main/Main';
import { Footer } from './components/Main/footer/footer'; 
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Capa/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
