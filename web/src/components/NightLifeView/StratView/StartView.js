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
    return <div className={['container-fluid',Style.startView].join(' ')} ref={props.refProp} style={{backgroundImage:`url(${BackGround})`}}>
            <div className='row justify-content-center mt-4 '>
            <div className='col'>
                <h1>Find your match. Chat.
                <br/>
                <span style={{color:'white'}}>Start Dating.</span>
                </h1>
            </div>
            </div>
            <div className={[Style.Button,'row justify-content-center mb-5'].join(' ')}>
                <Button size='38px' clicked ={props.clicked}>get started</Button>
            </div>
    </div>
}
{/* <div ref={props.refProp} className={Style.startView} style={{backgroundImage:`url(${BackGround})`}}>
<h1>Find your match. Chat.<br/> 
    <span style={{color:'white'}} >Start Dating.</span>
</h1>
<div className={Style.Button}>
    <Button clicked={props.clicked} size='38px'>get started</Button>
</div>
</div> */}
export default startView;