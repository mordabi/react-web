import React from 'react';
import Style from './Bars.module.css'
import Bar from './Bar/Bar'
import Beergarden from '../../../assets/Resources/bars/beer_garden.png';
import Moses from '../../../assets/Resources/bars/moses.png';
import forum from '../../../assets/Resources/bars/haforum.png';
import underground from '../../../assets/Resources/bars/friends_underground.png';


const bars = (props)=>
{
    let BarsImages = [
        {
            url:Moses,
            title:'Moses',
            address:'Aluf Sade 3, Ramat Gan',
            stars:4
        }
        ,{
            url:Beergarden,
            title:'Beer Garden',
            address:'Rotshild 532, Tel Aviv',
            stars:3
        }
        ,{
            url:forum,
            title:'HaForum',
            address:'Habarzel 2, Be’er Sheva',
            stars:5
        },
        {
            url:underground, 
            title:'Friends underground',
            address:'Ibn Gabirol 12, Tel Aviv',
            stars:2
        }];
    BarsImages = BarsImages.map((Image,index)=><Bar key={index} stars={Image.stars} title={Image.title} address={Image.address}  src={Image.url} alt={'image '+index}/>)
    return(
        <div className={Style.Bars}>
            {BarsImages}
        </div>
    );
} 

export default bars;