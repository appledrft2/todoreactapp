import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Home from './components/pages/Home';
// import uuid from 'uuid';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    todos:[
      
    ]
  };

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({todos:res.data}));
  }

  // Mark Completed
  markCompleted = (id) => {
    this.setState({todos:this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }
  delItem = (id)=>{

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]
    }));

  

    
  };

  addTodo = (title) =>{
    // const newTodo = {
    //   id:uuid.v4(),
    //   title:title,
    //   completed:false
    // };

    axios.post(`https://jsonplaceholder.typicode.com/todos`,
    {
      title,
      completed:false
    }
    ).then(res => this.setState({todos: [...this.state.todos, res.data]}));

    // this.setState({
    //   todos:[...this.state.todos, newTodo]
    // });

  }

  render() {
    console.log(this.state.todos);
    return (
      <Router>

      
      <div className="App">

        <Header></Header>

        <Route exact path="/" render= {props => (
          <React.Fragment>
            <div className="container">
                <Todos
                  todos={this.state.todos}
                  markCompleted={this.markCompleted}
                  delItem={this.delItem}
                ></Todos>
                <AddTodo addTodo={this.addTodo}></AddTodo>
            </div>
          </React.Fragment>
        )}
        />

        <Route path="/about" component={About} />



        <Route exact path="/home" render={props => (
          <React.Fragment>
            <Home todos={this.state.todos} ></Home>
          </React.Fragment>
        )}
        />
         

        
      </div>
      </Router>
    );
  }

}

export default App;
