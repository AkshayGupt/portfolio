import React,{Component} from 'react';
import Landing from './Landing';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import {Switch,Route} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';

class Main extends Component{

    render(){
        return(
           <Switch>
               
               <Route exact path='/portfolio' component={Landing} />
               {/* <Route path="/" component={Landing}/> */}
               <Route exact path='/contact' component={Contact} />
               <Route exact path='/resume' component={Resume} />
               <Route exact path='/projects' component={Projects} />
               <Route to='/' component={Landing} />
           </Switch>
        );
    }
}

export default Main;