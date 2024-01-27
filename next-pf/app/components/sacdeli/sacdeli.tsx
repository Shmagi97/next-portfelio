'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { globalImageFn } from '../globalImage/globalImage';
import { useGlobalContext } from '@/app/context/context';
import style from './sacdeli.module.scss'

const apiUrl = 'https://api.unsplash.com/photos/random/';
const apiKey = 'your_unsplash_api_key';
const count = 5;

interface Photo {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  links: {
    html: string;
  };
}

const Sacdeli: React.FC = () => {
  const [ready, setReady] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  
  const [newImage, setNewImage] = useState([])
  const { dataimg, setDataimg } = useGlobalContext();
  
  // const imageLoaded = () => {
  //   setImagesLoaded((prev) => prev + 1);
  //   // if (imagesLoaded === totalImages) {
  //   //   setReady(true);
  //   // }
  // };
  

  globalImageFn();

  

  // useEffect(()=>{

  //  const clear =  setInterval(()=>{
  //     setImagesLoaded((prev)=> prev+1);
    
  //   }, 3000)

  //   return ()=> clearInterval(clear)
    
    
    
  // },[])

  const filterEdData = dataimg.filter((el, index)=> index <=  imagesLoaded)


 useEffect(()=> {

  // setNewImage( ...dataimg[imagesLoaded] )

  console.log(filterEdData);

 }, [imagesLoaded])



  // const setAttributes = (element: HTMLElement, attributes: Record<string, string>) => {
  //   for (const key in attributes) {
  //     element.setAttribute(key, attributes[key]);
  //   }
  // };

  // const displayPhotos = () => {
  //   setImagesLoaded(0);
  //   setTotalImages(dataimg.length);
  // };

  // useEffect(() => {
  //   displayPhotos();
  // }, [imagesLoaded, dataimg]);

  // const getPhotos = async () => {
  //   //  globalImageFn()
  //   console.log('aqaaa');
    
  // };


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ready && window.innerHeight + window.scrollY >= document.body.offsetHeight -300) {
        setReady(false);
        // getPhotos();
        setImagesLoaded((prev)=> prev+1);
        console.log('aqaaa');
     
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, [ready]);

  // useEffect(() => {
  //   if (imagesLoaded === totalImages && totalImages > 0) {
  //     setReady(true);
  //   }
  // }, [imagesLoaded, totalImages]);

  return (
    <div >
      <div id="image-container" className={style.flexDiv}>
        {filterEdData.map((photo, index) => (
          <a key={index} href={'/'} target="_blank" rel="noopener noreferrer">
            <Image
              src={photo.img}
              alt={'photo'}
              title={'title'}
              // onLoad={imageLoaded}
              width={300}
              height={200}
              priority
            />
          </a>
        ))}
      </div>
      {ready && <div id="loader">Loading...</div>}
    </div>
  );
};

export default Sacdeli;

