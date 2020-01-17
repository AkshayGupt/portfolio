import React,{Component} from 'react';
import Landing from './landing';
import Contact from './Contact';
import Resume from './Resume';
import About from './About';
import Projects from './Projects';
import {Switch,Route} from 'react-router-dom';

class Main extends Component{

    render(){
        return(
           <Switch>
               <Route exact path='/' component={Landing} />
               <Route  path='/contact' component={Contact} />
               <Route  path='/resume' component={Resume} />
               <Route  path='/projects' component={Projects} />
               <Route  path='/about' component={About} />
           </Switch>
        );
    }
}

export default Main;