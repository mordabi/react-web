import React from 'react';
import Style from './PlacesView.module.css';
import Bars from '../../Tools/Bars/Bars';
import MapApi from '../../../containers/MapApi/MapApi'
import Button from '../../Tools/Button/Button';

const contain =['grid',Style.Places].join(' ');
const PlacesView =(props)=>(
    <div className={contain}>
        <div className='row  mb-5'>
            <div className='col'>
                <h1><span>tizz</span> is Everywhere</h1>
            </div>
        </div>
        <div className='row justify-content-center'> 
            <div className='col-8'>
                <MapApi markerPosition={[51.497442, -0.137156]}/>
            </div>
        </div>
            <div className='row justify-content-center mt-5 mb-5'>
                <div className='col-10'>
                    <p>Single-origin coffee art party keytar roof party. Vexillologist farm-to-table tilde neutra live-edge crucifix. Succulents try-hard dreamcatcher roof party. Leggings asymmetrical literally kickstarter heirloom kinfolk woke vaporware air plant lomo. Small batch you probably haven't heard of them bespoke, messenger bag enamel pin everyday carry flexitarian occupy deep v meh. Plaid single-origin coffee YOLO pour-over pok pok artisan kale chips vaporware post-ironic meditation sriracha.</p>
                </div>
            </div>
            <div className='row justify-content-center mt-4 mb-5'>
                <div className='col-10'>
                <h1> find your closest<span> tizz-Bar</span></h1>
                </div>
            </div>
        <div className='row justify-content-center'>
            <div className='col-12' id='Bars'>
                <Bars rs/>
            </div>
        </div>
        <div className='row justify-content-center mt-3 mb-5'>
            <div className='col-6'>
               <Button size='25px' radius='10px'>Find More</Button> 
            </div>
        </div>
        </div>
);

export default PlacesView;


