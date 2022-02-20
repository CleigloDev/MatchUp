import { useState } from 'react';
import './ProfileCard.css';

import profile1 from '../../assets/images/profiles/profile1.jpg'
import profile2 from '../../assets/images/profiles/profile2.jpg'
import profile3 from '../../assets/images/profiles/profile3.jpg'

import like from '../../assets/images/profiles/like.png'
import dislike from '../../assets/images/profiles/dislike.png'
import left from '../../assets/images/profiles/left.png'
import right from '../../assets/images/profiles/right.png'


export default function ProfileCard(props) {
    const [isLike, setIsLike] = useState(false);
    const [isDislike, setIsDislike] = useState(false);
    const [profiles, setProfiles] = useState([{images: [profile1, profile3], name: "Valentina", age: 25}, {images: [profile2], name: "Marta", age: 26}])
    const [indexImage, setIndexImage] = useState(0);

    const actionProfile = (action) => {
        showStatusProfile(action, true);
        profiles.splice(0, 1);
        setProfiles(profiles);
        setIndexImage(0);
        showStatusProfile(action, false);
    }

    const showStatusProfile = (action, status) => {
        switch(action){
            case 'DISLIKE':
                setIsDislike(status);
                setIsLike(false);
                break;

            case 'LIKE':
                setIsDislike(false);
                setIsLike(status);
                break;
        }
    }

    const changeImage = (direction) => {
        let newIndex;
        switch(direction) {
            case 'LEFT':
                if(indexImage === 0) return;
                newIndex = indexImage-1
                setIndexImage(newIndex);
                break;

            case 'RIGHT':
                if(indexImage === profiles[0].images.length -1) return;
                newIndex = indexImage+1
                setIndexImage(newIndex);
                break;
        }
    }

    const renderProfiles = (profile, indexImage) => {
        const { images, name, age } = profile;
        const image = images[indexImage];
        return (
            <div key={image}>
                <div>
                    <div className='image-selector' onMouseDown={() => changeImage("LEFT")}>
                        <img src={left} className='arrow-left noSelect' />
                    </div>
                    <img src={image} className='image-style noSelect' />
                    <div className={'image-selector image-selector-right'} onMouseDown={() => changeImage("RIGHT")}>
                        <img src={right} className='arrow-right noSelect' />
                    </div>
                </div>
                <p className='profile-name'>{name}</p>
                <p className='profile-info'>{age} anni</p>
                <div className='buttons-container noSelect'>
                    <img src={dislike} className='button-size' 
                        onMouseEnter={() => {showStatusProfile("DISLIKE", true)}} 
                        onMouseLeave={() => {showStatusProfile("DISLIKE", false)}} 
                        onMouseDown={() => {actionProfile("DISLIKE")}}/>
                    <img src={like} className='button-size' 
                        onMouseEnter={() => {showStatusProfile("LIKE", true)}} 
                        onMouseLeave={() => {showStatusProfile("LIKE", false)}} 
                        onMouseDown={() => {actionProfile("LIKE")}}/>
                </div>
            </div>
        )
    }
    
    const render = () => {
        return (
            <div className='image-position'>
                <div className='image-container'>
                    {isLike ?
                        <div className='container-like'>
                            <p className='profile-reaction-like'>LIKE</p>
                        </div> : null
                    }
                    {isDislike ?
                        <div className='container-dislike'>
                            <p className='profile-reaction-dislike'>NOPE</p>
                        </div> : null
                    }
                    {renderProfiles(profiles[0], indexImage)}   
                </div>
            </div>
        );
    }

  return render();
};