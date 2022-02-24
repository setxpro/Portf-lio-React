/* eslint-disable jsx-a11y/alt-text */
import './CardProjects.css';

import Moveit from '../../img/logo-full.svg';
import DsVendas from '../../img/Dsvendas.jpg'

export function CardProjects() {

    return (
        <div className='cntainer--card--item'>
            <div className='cardItem'>
                <a href="https://moveit-two-ecru.vercel.app/" target="_blank">
                    <img src={Moveit} /> 
                    
                </a>
                <button>Move.it</button>
            </div>
            <div className='cardItem'>
            <a href='https://patrick-dsvendas.netlify.app/' target="_blank">
                <img src={DsVendas} /> 
                
            </a>
                <button>DsVendas</button>
            </div>
            
        </div>
    );
}