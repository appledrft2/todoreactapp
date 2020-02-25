import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export class AddTodo extends Component {

    state = {
        title:""
    };
    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.title !== ""){
            this.props.addTodo(this.state.title);
            this.setState({
                title: ""
            });
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type="text" style={{ display: '10',padding:'10px',width:'100%' }} value={this.state.title} name="title" placeholder="New Todo.." onChange={this.onChange}/>
                <Button type="submit" variant="primary">Submit</Button>
            </form>
        )
    }
}

export default AddTodo
