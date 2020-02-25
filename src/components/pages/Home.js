import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class Home extends Component {

    renderItems(){
        return this.props.todos.map(todo => (
            <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td><input type="checkbox" /></td>
            </tr>
        ));
    }

    render() {
        return (
           <Table striped bordered hover >
               <thead>
                   <tr>
                       <th>ID</th>
                       <th>Title</th>
                       <th>Mark</th>
                   </tr>
               </thead>
               <tbody>
                    {this.renderItems()}
               </tbody>
           </Table>
        );
    }
}


export default Home
