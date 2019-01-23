import React from 'react' ;
import Style from './StartView.module.css';
import BackGround from '../../../assets/Resources/background_image.png';
import Button from '../../Tools/Button/Button'

const startView=(props)=>{
    return <div className={Style.startView} style={{backgroundImage:`url(${BackGround})`}}>
    <h1>Find your match.Chat.<br/> 
        <span >Start Dating.</span>
    </h1>
    <div className={Style.Button}>
        <Button size='38px'>get started</Button>
    </div>
</div>
}

export default startView;