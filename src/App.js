import React,{Component}from 'react';
import Person from './Compnents/Person'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class  App extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="text-center">
                <h1>Hello world!</h1>
                <hr/>
                <Person/> 
            </div>

        )
    }
}  