import React,{Component} from 'react';
import Landing from './Landing';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import {Switch,Route} from 'react-router-dom';

class Main extends Component{

    render(){
        return(
           <Switch>
               <Route path="/" component={Landing}/>
               <Route exact path='/portfolio' component={Landing} />
               <Route  path='/contact' component={Contact} />
               <Route  path='/resume' component={Resume} />
               <Route  path='/projects' component={Projects} />
           </Switch>
        );
    }
}

export default Main;