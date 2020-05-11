import React, { Component } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

  export default class TodoInput extends Component{
      render(){
        const {item, handleChange, handleSubmit, editItem} = this.props

        return(
            <div>
                <h1 className="text-center">What do you want to acheive today?</h1>
                <FormControl>
                    <form onSubmit={handleSubmit} className="self-center">
                        <div className="align-center">
                            <InputLabel htmlFor="my-input">Try "Do laundry"</InputLabel>
                            <Input 
                                type="text"
                                id="my-input" 
                                aria-describedby="my-helper-text"
                                value={item} 
                                onChange={handleChange}
                            />
                            <Button type="submit" style={{fontFamily:"Mali", fontStyle:"bold"}}>
                                { editItem ?  'edit':'add item'}  
                            </Button>
                        </div>
                    </form>
                </FormControl>
          </div>
        )
    }
}
