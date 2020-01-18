import React,{Component} from 'react';
import avatar from '../avatar.svg'
import {Grid,Cell} from 'react-mdl';
class Landing extends Component{


    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                    src={avatar} 
                    alt="avatar"
                        />
                        <div className="text-landing-grid">
                            <h1>Full Stack Developer</h1>
                            <hr></hr>
                            <p>HTML/CSS | JAVASCRIPT | BOOTSTRAP | NodeJS | MongoDB | Express | ReactJS</p>
                            <div className="social-icons">
                            <a href="http://google.com" ><i className="fab fa-linkedin"  ></i></a>
                            <a href="http://google.com" ><i className="fab fa-github"></i></a>
                             </div>
                            
                        </div>
                </Cell>
            </Grid>
            </div>
        );
    }
}

export default Landing;