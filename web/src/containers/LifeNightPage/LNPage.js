import React, {Component} from 'react' ;
import Style from './LNPage.module.css';
import StartView from '../../components/NightLifeView/StratView/StartView'

class LNPage extends Component{

    state={
        scrollSeconedView:false

    };

    scrollSeconedViewHandler=()=>{
        this.setState({
            scrollSeconedView:true
        })
    }
    disableScrollHandler=()=>{

    }
    
    render()
    {
        return <>
            <StartView clicked={this.scrollSeconedViewHandler} />
        </>
    }

}

export default LNPage;