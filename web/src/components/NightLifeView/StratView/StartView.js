import React from 'react' ;
import Style from './StartView.module.css';
import BackGround from '../../../assets/Resources/background_image.png';
import Button from '../../Tools/Button/Button'

/**
 * *props:
 * * refProp - hold the ref
 * * clicked - holds function scroll the hight of the ref element 
 */
const startView=(props)=>{
    return <div ref={props.refProp} className={Style.startView} style={{backgroundImage:`url(${BackGround})`}}>
    <h1>Find your match. Chat.<br/> 
        <span >Start Dating.</span>
    </h1>
    <div className={Style.Button}>
        <Button clicked={props.clicked} size='38px'>get started</Button>
    </div>
</div>
}

export default startView;