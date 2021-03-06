import React, { Component } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
class TodoList extends Component {
    deleteRow(id, e) {
        console.log("deleting id is  ::::::::::::::", id)
        this.props.deleteTodo(id,e);
    }
    render() {
        return (
            <div className='mt-4'>
                <ul className='list-group'>
                    {this.props.items.map((item) => {
                        return (
                            <li className='list-group-item' key={item.id}>{item.name}
                                <button className='deleteButton' onClick={(e) => this.deleteRow(item.id, e)}><i className="icon bi bi-trash"></i></button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;