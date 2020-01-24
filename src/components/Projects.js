import React,{Component} from 'react';
import {Grid,Cell,Tabs,Tab,Card,CardActions,CardText,CardTitle,Button} from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state={
            active:0
        };
    }

    toggleTab(){
        
        if(this.state.active === 0){
            return(
                <Grid>
                    <Cell col={4} phone={12} tablet={12} align="middle"> <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(https://www.visions.net.in/sites/default/files/images/mern2/business.png) center right 15% no-repeat #46B6AC'}}></CardTitle>
                            <CardText>
                              DevConnector - a social media for developers.
                            </CardText>
                            <CardActions border style={{textAlign:"center"}}>
                               <a href="https://github.com/AkshayGupt/DevConnector" target="_blank"><Button colored>View</Button></a> 
                            </CardActions>
                        </Card></Cell>
                    <Cell col={4} phone={12} tablet={12}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(https://storage.googleapis.com/blog-images-backup/1*3SVfBkNZI2f-sspiq59xcw.png) center right 15% no-repeat #46B6AC'}}></CardTitle>
                            <CardText>
                            Playlist - a youtube Playlist.
                            </CardText>
                            <CardActions border style={{textAlign:"center"}}>
                               <a href="https://github.com/AkshayGupt/Playlist" target="_blank"><Button colored>View</Button></a> 
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={12} tablet={12}> 
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i.udemycdn.com/course/240x135/1411694_0862.jpg) center right 50% no-repeat #46B6AC'}}></CardTitle>
                        <CardText>
                            My portfolio
                        </CardText>
                        <CardActions border style={{textAlign:"center"}}>
                            <a href="https://github.com/AkshayGupt/portfolio" target="_blank"><Button  colored>View</Button></a>
                        </CardActions>
                    </Card> 

                    </Cell>
                </Grid>

                )
            }
           
           
        else if(this.state.active === 1){
            return(
           <div>
               <Grid>
                   <Cell col={4} tablet={12} phone={6}>
                   <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(https://assets.exercism.io/tracks/java-hex-turquoise.png) bottom right 15% no-repeat #46B6AC'}}>Java</CardTitle>
                            <CardText>
                              Store Management System - provides admin and customer services.
                            </CardText>
                            <CardActions border style={{textAlign:"center"}}>
                                <a href="https://github.com/AkshayGupt/store-management-system" target="_blank"><Button colored>View</Button></a>
                            </CardActions>
                        </Card>
                   </Cell>
               </Grid>
                
           </div> 
            )
            
        }
    }
    render(){
        return(
          

                  <div className="category-tabs">
                    <Tabs activeTab ={this.state.active} onChange={(tabId) => this.setState({active:tabId})} ripple>
                        <Tab>Web Dev</Tab>
                        <Tab>Others</Tab>
                    </Tabs>
      
                    
            <section >
               <Grid>
                   <Cell col={12}>
                       <div className="content">
                       {this.toggleTab()}
                       </div>
                   </Cell>
               </Grid>
            </section>
            </div>
        );
    }
}

export default Projects;