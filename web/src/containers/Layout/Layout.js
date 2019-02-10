import React,{Component} from 'react'
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

/**
 * *statefull component include the menu
 */
class Layout extends Component{
    state={
        pageClass:0,
        isClose:true,
    }
    pageClassHandler=(pageNumber)=>{
        this.setState({
            pageClass:pageNumber
        });
    }
    sideDrowerHandler=()=>{
        this.setState({
            isClose:!this.state.isClose
        })
    }
    
    render(){
        return (
            <div className='grid'>

            <SideDrawer  isClose={this.state.isClose} pageClass={this.state.pageClass} pageNum={this.pageClassHandler}/>
            <div className='row justify-content-between'>
                <ToolBar pageNum={this.pageClassHandler} pageClass={this.state.pageClass} clicked={this.sideDrowerHandler}/>
            </div>
           
            <main>
                {this.props.children}
            </main>
            
            </div>
        );
    }
}

export default Layout;