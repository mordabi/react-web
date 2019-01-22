import React,{Component} from 'react'
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';

/**
 * *statefull component include the menu
 */
class Layout extends Component{
    state={
        pageClass:0
    }
    pageClassHandler=(pageNumber)=>{
        this.setState({
            pageClass:pageNumber
        })
    }
    render(){
        return (
            <>
            <ToolBar pageNum={this.pageClassHandler} pageClass={this.state.pageClass}/>
            <main>
                {this.props.children}
            </main>
            
            </>
        );
    }
}

export default Layout;