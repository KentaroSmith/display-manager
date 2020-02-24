import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap'
class Home extends Component {
    render(){
        return(
            <Jumbotron>
                <h1>MSO Display Picker</h1>
                <ul>
                    <li><a href='/Streets'>Streets Display</a></li>
                    <li><a href='/FieldShop'>Field Shop Display</a></li>
                    <li><a href='/Settings'>Settings</a></li>
                </ul>
            </Jumbotron>

        )
    }
}
export default Home;