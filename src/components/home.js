import React, { Component } from 'react';
import {Jumbotron, Container} from 'reactstrap'
class Home extends Component {
    render(){
        return(
            <div>
            <Container>
            <Jumbotron>
                <h1>MSO Display Picker</h1>
                <ul>
                    <li><a href='/Streets'>Streets Display</a></li>
                    <li><a href='/FieldShop'>Field Shop Display</a></li>
                    <li><a href='/Settings'>Settings</a></li>
                </ul>
            </Jumbotron>
            </Container>

            </div>
           
        )
    }
}
export default Home;