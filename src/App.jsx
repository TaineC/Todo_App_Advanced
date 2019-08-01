import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm.jsx';
import Todo from './Todo.jsx';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos:[
        {
          id: 1,
          content: 'bus home',
          priority: 'important'
        },
        {
          id: 2,
          content: 'learn react',
          priority: 'urgent',
        },
        {
          id: 3,
          content: 'sleep',
          priority: 'not important'
        }
      ]
    };
  }

  addTodo = (data) => {
    var newTodo = {
      id: Date.now(),
      ...data
    };
    var newList = [...this.state.todos,newTodo];
    this.setState({
      todos: newList
    });

    // var todos = [newTodo,...this.state.todos];
    // this.setState({todos});
  }

  removeTodo = (id) => {

  }

  updateTodo = (id,data) => {

  }

  render(){
    return (
        <div className="wrap">
          {/* <button onClick={() => {this.addTodo({content:'hi',priority:'no'})}}>test</button> */}
          <div className="container">
            <div className="todos">

              {
                this.state.todos.map((todo) => {
                  var todoProps = {
                    ...todo,
                    key: todo.id
                  };
                  return(
                    <Todo {...todoProps}/>
                  )
                })
              }

              <NewTodoForm addTodo={this.addTodo}/>

            </div>
          </div>
        </div>
    );
  }
  
}

export default App;
