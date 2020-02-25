import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = ()=>{
        return {
            background: "#F4F4F4",
            padding:"10px",
            borderBottom:"2px #ccc dotted",
            textDecoration: this.props.todo.completed ? 'line-through' : "none"
        }
    }


    render() {

        // deconstruct
        const {id,title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this,id)}/>  {title} 
                    <button style={btnStyle} onClick={this.props.delItem.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}
// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background:"crimson",
    color:"white",
    border:"none",
    padding:"5px 10px",
    borderRadius:"5%",
    cursor:"pointer",
    float:"right"
}

export default Todoitem
