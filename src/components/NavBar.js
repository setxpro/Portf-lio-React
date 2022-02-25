
import './NavBar.css';
import Logoo from '../img/logoo.png';

function NavBar() {
    return (
        <div className='navBar'>
            <div className='logo'>
               <img src={Logoo} alt="Logo"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#topo">Home</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#tecnologias">Tecnologias</a>
                    </li>
                    <li>
                        <a href="#atividades">Atividades</a>
                    </li>
                </ul>
            </nav>
            <div className='area-img'>
                <div className='imagem'></div>
            </div>
             </div>  
    );
}

export default NavBar;
