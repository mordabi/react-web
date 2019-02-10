import React from 'react' ;
import Style from './MobileView.module.css';
import Image from '../../PhoneImage/PhoneImage';
import IphoneImg from '../../../assets/Resources/mock/iphone.png';
import AndroidImg from '../../../assets/Resources/mock/android.png';
import GooglePlayImg from '../../../assets/Resources/buttons/download_android.png';
import AppStoreImge from '../../../assets/Resources/buttons/download_ios.png';
  /**
   * create two new components to hold the images
   */
const Images = [
    {
        img:AndroidImg,
    store:GooglePlayImg 
},
    {
        img:IphoneImg,
    store:AppStoreImge
}
];
/**
 * * hold images of mobile 
 * * hold store img
 */
const mobileView=(props)=>{
   const PhoneImages = Images.map((PhoneImage,index)=>{

       return <Image key={index} store={PhoneImage.store} src={PhoneImage.img} />
    })
    return <div className={[Style.MobileView,'container-fluid']}>
        <div className='justify-content-center mt-5 mb-3'>
            <h1>Get The most from your NightLife<span>.</span></h1>
        </div>
        <div className='justify-content-center mb-2'>
         {PhoneImages}
        </div>
    </div> 
    
}

export default mobileView;