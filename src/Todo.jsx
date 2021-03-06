import React, {Component} from 'react';
import './App.css';

class Todo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="todo">
                <div className="todo-body">
                  <i className="far fa-times-circle todo-remove"></i>
                  <div className="todo-content">
                    {this.props.content}
                  </div>
                  <div className="todo-priority">
                    {this.props.priority}
                  </div>
                </div>
              </div>
        )
    }

}

export default Todo;