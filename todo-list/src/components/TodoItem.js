import React, {Component} from 'react';
import CheckBoxes from './CheckBox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const MyList = styled(List)({
        width: '40%',
        display: 'flex',
        backgroundColor: "#efefef",
        margin: '0 auto',
        '@media (max-width:500px)':{
            width: '100%'
        }
    })

export default class TodoItem extends Component {
    render(){
        const {item, handleDelete, handleEdit} = this.props;
        return(
            <MyList>
                <div className="d-flex justify-content-between" style={{width: "100%"}} >
                    <CheckBoxes color="primary"/>
                    <h6 className="mb-1 pt-2" style={{fontSize: "17px", fontFamily:"Mali", fontStyle:"bold"}}>{item}</h6>
                    <div style={{padding: "5px 10px 0 0"}}>
                        <EditIcon className="pr-1" onClick={handleEdit} style={{cursor: "pointer", textAlign:'right'}}/>
                        <DeleteIcon className="pl-1" onClick={handleDelete} style={{cursor: "pointer", textAlign:'right'}}/>
                    </div>
                </div>
            </MyList>  
        )
    }
}