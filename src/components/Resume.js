import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import avatar from '../avatar.svg';
import Education from './Education';
import Skills from './Skills'

class Resume extends Component{


    render(){
        return(
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                       <div style={{textAlign:"center"}}>
                           <img 
                           src={avatar}
                            alt="avatar"
                            height="200px"
                            />
                       </div>
                       <br/>
                       <br/>
                       <br/>
                       <br/>
                       <div>
                             <h1 style={{}}>Akshay Gupta</h1>
                             <h3 style={{color:"grey"}}>Programmer</h3>
                             <hr style={{borderTop:"5px solid #833fb2",width:"50%"}}></hr>
                             <p>I am a student at Manipal University Jaipur. I like to design and develop web applications using MongoDB, NodeJS , Express and ReactJS. I am also a competitive coder. I have 3* rating in codechef and have won some coding competitions.</p>
                            <p>I am hardworking and always ready to learn and explore new technologies.</p>
                            <hr style={{borderTop:"5px solid #833fb2",width:"50%"}}></hr>
                            <h5>Address</h5>
                            <p>Manipal University Jaipur, 303007</p>
                            <h5>Phone</h5>
                            <p>7004473349</p>
                            <h5>Email</h5>
                            <p>189301019.akshay@gmail.com</p>
                            <hr style={{borderTop:"5px solid #833fb2",width:"50%"}}></hr>
                       </div>
                      
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                       <h2>Education</h2>
                        <Education
                        startYear={2010}
                        endYear={2016}
                        school={"St. Thomas School"}
                        grade={"93.60%"}
                        type={"High School"}
                        />
                        <Education
                        startYear={2016}
                        endYear={2018}
                        school={"Delhi Public School"}
                        grade={"92.60%"}
                        type={"Senior Secondary School"}
                        />
                        <Education
                        startYear={2018}
                        endYear={2022}
                        school={"Manipal University Jaipur"}
                        grade={"9.70 CGPA"}
                        type={"Undergraduate School"}
                        />
                        <hr style={{ borderTop:"5px solid red",width:"60%"}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill={"JAVA"}
                            level={75}
                        />
                        <Skills
                            skill={"HTML/CSS"}
                            level={80}
                        />
                        <Skills
                            skill={"Javascript"}
                            level={70}
                        />
                        <Skills
                            skill={"MongoDB"}
                            level={75}
                        />
                        <Skills
                            skill={"React"}
                            level={60}
                        />
                        <Skills
                            skill={"Node"}
                            level={77}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;