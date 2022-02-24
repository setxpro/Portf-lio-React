import { CardsLeft } from './CardsLeft/CardsLeft';
import { CardsRight } from './CardsRight/CardsRight';

import './Main.css';

export function Main() {
    return (
        <main>
            <CardsLeft/>
            <CardsRight/>
        </main>
    );
}