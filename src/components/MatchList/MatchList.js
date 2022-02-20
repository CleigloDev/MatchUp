import { useState } from 'react';
import './MatchList.css';

import profile1 from '../../assets/images/profiles/profile1.jpg'
import profile2 from '../../assets/images/profiles/profile2.jpg'
import profile3 from '../../assets/images/profiles/profile3.jpg'

export default function MatchList() {
    const [matches, setMatches] = useState([{thumbImage: profile1}, {thumbImage: profile2}, {thumbImage: profile3},{thumbImage: profile1}, {thumbImage: profile2}, {thumbImage: profile3},{thumbImage: profile1}, {thumbImage: profile2}, {thumbImage: profile3},{thumbImage: profile1}, {thumbImage: profile2}, {thumbImage: profile3},{thumbImage: profile1}, {thumbImage: profile2}, {thumbImage: profile3},{thumbImage: profile1}, {thumbImage: profile2}, {thumbImage: profile3}])

    const renderMatchThumb = (match) => {
        const { thumbImage } = match;
        return (
            <div className='thumb-container noSelect'>
                <div className='thumb-hover'/>
                <img src={thumbImage} className='thumb-image' draggable={false}/>
            </div>
        )
    }
    
    const render = () => {
        return (
            <div className='match-history-container'>
                {
                    matches.map(renderMatchThumb)
                }
            </div>
        );
    }

  return render();
};