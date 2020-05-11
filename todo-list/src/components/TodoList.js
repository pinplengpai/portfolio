import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Button } from '@material-ui/core';

export default class TodoList extends Component {
    render(){
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return(
            <div>
                <ul className="p-0">
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
                <Button onClick={clearList} color="secondary" style={{width:"40%"}} >Clear List</Button>
                </ul>
            </div>
        )
    }
}