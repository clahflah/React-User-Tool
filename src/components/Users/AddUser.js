import React, {useState} from 'react';
import Card from '../UI/Card';

import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const submitHandler = (event) =>{

  }


  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label Htmlfor='username'>Username</label>
        <input id='username' type='text' onChange={usernameChangeHandler}/>
        <label Htmlfor='age'>Age (Years)</label>
        <input id="age" type='number' onChange={ageChangeHandler}></input>
        <Button type='submit' onClick={submitHandler}>Add User</Button>
      </form>
    </Card>
  )
};

export default AddUser;
