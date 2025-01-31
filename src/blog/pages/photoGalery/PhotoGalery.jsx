import { useState } from 'react';
import photoList from '../../assets/json/photos.json';
import './photo-galery.css';

const PhotoGalery = () => {

    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index < photoList.length -1) {
            setIndex(index + 1);
        }
        
    }

    function handleClickBack() {
        if (index < photoList.length +1) {
            setIndex(index - 1);
        }
        
    }

    let photoData = photoList[index];

    return (

        <div className='photo-galery'>
            <div className='btn-style'>
                <button onClick={handleClickBack}>
                    Back
                </button>

                <button onClick={handleClick}>
                    Next
                </button>
            </div>
        
            <h3>({index + 1} of {photoList.length})</h3>
            <img 
                src={photoData.photoUrl} 
                alt={photoData.alt}
            />
      
        </div>
    );
}

export default PhotoGalery;