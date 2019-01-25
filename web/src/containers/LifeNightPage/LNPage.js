import React, {Component} from 'react' ;
import Style from './LNPage.module.css';
import StartView from '../../components/NightLifeView/StratView/StartView'
import MobileView from '../../components/NightLifeView/MobileView/MobileView';

/**
 * *holds the night life page
 */
class LNPage extends Component{

    constructor(props){
        super(props);
        this.mobileRef = React.createRef();
    }
    state={
        scrollSeconedView:0

    };
    /**
     * * scroll 4px every itaretion
     * * and clear the Interval when scroll the relavant height 
     */
    scrollStep=()=> {
        if (window.scrollY >= this.mobileRef.current.scrollHeight+40) {
            clearInterval(this.state.scrollSeconedView);
        }
        window.scroll(0, window.pageYOffset + this.props.scrollspeed);
      }
      /**
       * *call to scrollstep 
       * * change state of interval
       */
      scrollToSeconedView=()=> {
         let scrollSeconedView = setInterval(this.scrollStep.bind(this));
         this.setState({
             scrollSeconedView:scrollSeconedView
         })
      }

    
    render()
    {
        return <>
            <StartView refProp={this.mobileRef} clicked={this.scrollToSeconedView} />
            <MobileView/> 
        </>
    }

}

export default LNPage;