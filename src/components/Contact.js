import React,{Component} from 'react';
import { Grid, Cell,List,ListItem,ListItemContent } from "react-mdl";
import avatar from '../avatar.svg';

class Contact extends Component{


    render(){
        return(
           <div className="contact-grid">
               <Grid >
                    <Cell col={2} >
                        </Cell> 
                    <Cell col={4}>
                      <div className="contact-part-a">
                            <h1>Akshay Gupta</h1>
                        <div className="contact-avatar">
                            <img src={avatar} alt="Avatar"/>
                        </div>
                        <br></br>
                        <p>Hi, I am a MERN stack web-developer. I am currently in my 2nd year of BTECH in Computer Science stream in Manipal University Jaipur.  </p>
                      </div>
                    </Cell>
                    <Cell col={4}>
                        <div className="contact-part-b">

                             <h1>Contact Me</h1>
                            
                            <div className="contact-phone"> 
                                <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:20}}> <i class="fas fa-phone" />(+91) 7004473349</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:20}}><i class="fas fa-phone" />(+91) 8987727031</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:20}}><i class="fas fa-envelope"></i>189301019.akshay@gmail.com</ListItemContent>
                                </ListItem>
                                </List>
                            </div>

                        </div>
                        </Cell>
                    <Cell col={2} />

                    
               </Grid>
           </div>
        );
    }
}

export default Contact;