import { useState } from 'react';
import './Header.css';

import match from '../../assets/images/icons/match.png';

export default function MatchList() {
    
    const render = () => {
        return (
            <div className='header-container'>
                <img src={match} className='match-image'/>
                <p>MatchUP</p>
            </div>
        );
    }

  return render();
};