import React, {Component} from 'react' ;
import Style from './LNPage.module.css';
import StartView from '../../components/NightLifeView/StratView/StartView'
import MobileView from '../../components/NightLifeView/MobileView/MobileView';
import PlacesView from '../../components/NightLifeView/PlacesView/PlacesView'
import StatsView from '../../components/NightLifeView/StatView/StatsView'

/**
 * *holds the night life page
 */
class LNPage extends Component{

    constructor(props){
        super(props);
        this.mobileRef = React.createRef();
        this.statViewRef = React.createRef();
    }
    state={
        scrollSeconedView:0,
        scrollY:0
    };
    componentDidMount=()=>{
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }
    /**
     * * scroll 4px every itaretion
     * * and clear the Interval when scroll the relavant height 
     */
    scrollStep=()=> {
        if (window.scrollY >= this.mobileRef.current.scrollHeight-40) {
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
      handleScroll = (event) => {
        if(window.scrollY>=this.statViewRef.current.offsetTop-470)
        {
                this.setState({
                    scrollY: true
                });
            }
        else{
            if(window.scrollY<=this.mobileRef.current.offsetHeight-500)
        this.setState({
            scrollY: false
        });
        }
    }

      NumberMotion=()=>{
        document.getElementById('count').each(()=>{
            document.getElementById(this).prop('Counter',0).animate({
                Counter:document.getElementById(this).text()
            },{
                duration:4000,
                easing:'swing',
                step:(now)=>{
                    document.getElementById(this).text(Math.ceil(now));
                }
            })
        })
    }
    
    
    render()
    {
       
        return <div className='grid No-margin'>
            <StartView refProp={this.mobileRef} clicked={this.scrollToSeconedView} />
            <MobileView/> 
            <PlacesView/>
            <StatsView update={this.state.scrollY} reForward={this.statViewRef}/>
        </div>
    }

}

export default LNPage;