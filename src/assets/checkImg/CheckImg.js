import React from 'react';
import DefaultCrypto from '../../img/crypto.png'

const useImageStatus = url => {
    const [ hasError, setHasError ] = React.useState(null)
    const image = new Image(url);
    image.onerror = () => setHasError(true);
    image.onload = () => setHasError(false);
    image.src = url;
    
    return hasError;
  }
  
const CheckImg = ({ symbol, ...props }) => {
   const src=`https://assets.coinlayer.com/icons/${symbol}.png`
   const imageFailed = useImageStatus( src )
   
    if (!imageFailed) {
       
        return <img src={src} {...props} alt='' />
    }
    return <img src={DefaultCrypto} {...props} alt='' />
}
  
export default CheckImg;