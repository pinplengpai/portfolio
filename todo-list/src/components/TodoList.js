import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Button } from '@material-ui/core';

export default class TodoList extends Component {
    render(){
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return(
            <div className="self-center">
                <ul>
                <h3 style={{fontFamily:"Mali"}}>Your Todos Today</h3>

                {items&&items.map( item => {
                return(
                    <TodoItem
                        key = {item.id}
                        item = {item.item}
                        handleDelete = {() => handleDelete(item.id)}
                        handleEdit = {() => handleEdit(item.id)}
                    />
                    )
                })}
                <Button onClick={clearList}>Clear List</Button>
                </ul>
            </div>
        )
    }
}