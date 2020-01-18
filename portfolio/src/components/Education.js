import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Education extends Component{

    render(){
        return(
            <div>
                <Grid>
                    <Cell col={3}>
                      <h5>{this.props.startYear}-{this.props.endYear}</h5> 
                    </Cell>
                    <Cell col={9}>
                        <h5>{this.props.school}( {this.props.grade})</h5>
                        <p>{this.props.type}</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Education;