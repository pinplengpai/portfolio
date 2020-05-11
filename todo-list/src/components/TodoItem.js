import React, {Component} from 'react';
import CheckBoxes from './CheckBox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default class TodoItem extends Component {
    render(){
        const {item, handleDelete, handleEdit} = this.props;
        return(
            <li className="d-flex justify-content-center">
                <CheckBoxes/>
                <h6 className="mb-1 pt-3" style={{fontSize: "17px", fontFamily:"Waiting for the Sunrise"}}>{item}</h6>
                <EditIcon onClick={handleEdit} style={{cursor: "pointer"}}/>
                <DeleteIcon onClick={handleDelete} style={{cursor: "pointer"}}/>
            </li>  
        )
    }
}