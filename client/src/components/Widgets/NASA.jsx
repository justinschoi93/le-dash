import { useState, useEffect } from 'react';
// import { useQuery, useMutation } from '@apollo/client';
// import {NASA_ADD_FAVORITE} from '../../utils/mutations';
// import { GET_NASA_FAVORITES } from '../../utils/queries';
import nasa_logo from '../../images/nasa_official.png';
import '../../css/NASA.css';

export default function NASAwidget() {
  const [photoData, setPhotoData] = useState({
    date: '',
    title: '',
    src: '',
    caption: '',
    photographer: '',
    description: '',
  });

  // const [addToFavorites] = useMutation(NASA_ADD_FAVORITE);
  // const {data} = useQuery(GET_NASA_FAVORITES);
  // const [viewFavorites, setViewFavorites] = useState(false) 
  const getData = async() => {
  
    try {
      const response = await fetch(
        'https://api.nasa.gov/planetary/apod?api_key=ldu00DPMmJO4nb9rTFgemhoA8TEwoKso0Adud0pe'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Could not retrieve photo.', error)
      return null;
    }
  };

  useEffect(() => {
    const wrapper = async () => {
      const NASAdata = await getData();

      if (NASAdata) {
        setPhotoData({
          date: NASAdata.date,
          title: NASAdata.title,
          src: NASAdata.url,
          caption: NASAdata.explanation,
          photographer: NASAdata.hdurl,
          description: NASAdata.description,
        });
      }
    };

    wrapper();
  }, []); 

  const isYoutubeLink = photoData.src.includes('youtube');

  
  let img;
  
  if (!isYoutubeLink) {
    img = new Image();
    img.src = photoData.src;
  }
  
  let aspectRatio = 16 / 9;

  if (!isYoutubeLink) {
    aspectRatio = img.naturalWidth / img.naturalHeight;
  }

  const initialWidth = 300;
  const initialHeight = initialWidth / aspectRatio;

  return (
    
      <div className="widget-content" style={{ width: '19rem' }}>
          <div className="nasa-header">
            <img className="nasa-logo" src={nasa_logo}></img>
            <h5 className="card-title">Astronomy Picture of the Day</h5>
          </div>
          {/* {viewFavorites ? (
            <div className="favorites-display">
              {data.map((fav)=>{
                <div className="favorite-photo">
                  <div>{fav.title}</div>
                  <img src={fav.src} id={fav.title}/>
                  <div>{fav.caption}</div>
                </div>
              })}
              <button onClick={()=>setViewFavorites(false)}>⭐⭐⭐Photo of the Day⭐⭐⭐</button>
            </div> */}
            
          {/* ) : ( */}
          <div className="astronomy-photo-of-the-day-display">
            <div className="photo-title">{photoData.title}</div>
            {isYoutubeLink ? (
              <iframe
                width="100%"
                height="100%"
                src={photoData.src}
                frameBorder="0"
                allowFullScreen
                title={photoData.title}
              ></iframe>
            ) : (
              <img
                src={photoData.src}
                className="photo"
                alt={photoData.title}
              />
            )}
            <div className="photo-date">{photoData.date}</div>
            {/* <button className="me-2 favorite-btn" 
              onClick={()=>addToFavorites({
                variables: {
                  photoData: {...photoData}
                }
              })}>
              ⭐Add to Favorites⭐
            </button>
            <button className="favorite-btn" onClick={()=>setViewFavorites(true)}>⭐View Favorites⭐</button> */}
          </div>
          <div className="photo-data hidden">
              <div className="photo-caption">{photoData.caption}</div>
          </div>
      </div>  
  );
}


                


                
           