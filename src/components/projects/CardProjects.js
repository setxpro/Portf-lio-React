/* eslint-disable jsx-a11y/alt-text */
import './CardProjects.css';

import Moveit from '../../img/logo-full.svg';
import DsVendas from '../../img/Dsvendas.jpg'

export function CardProjects() {

    return (
        <div className='cntainer--card--item'>
            <div className='cardItem'>
                <a href="https://moveit-two-ecru.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={Moveit} alt="Move.it" /> 
                    
                </a>
                <a href="https://moveit-two-ecru.vercel.app/" target="_blank" rel="noreferrer"><button>Move.it</button></a>
            </div>
            <div className='cardItem'>
            <a href='https://patrick-dsvendas.netlify.app/' target="_blank" rel="noreferrer">
                <img src={DsVendas} alt="DsVendas"/> 
                
            </a>
               <a href='https://patrick-dsvendas.netlify.app/' target="_blank" rel="noreferrer"> <button>DsVendas</button></a>
            </div>
            
        </div>
    );
}