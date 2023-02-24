import React, {useState} from 'react';
import Card from '../UI/Card';

import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [errorDescription, setErrorDescription] = useState('')

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length===0 || enteredAge.trim().length===0) {
      setError(true)
      setTitle("Length Error")
      setErrorDescription('You must enter a Username and an Age to continue.')
      return;
    }
    if (+enteredAge < 1) {
      setError(true)
      setTitle("Age Error")
      setErrorDescription('Age must be greater than 0')
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorClickHandler = () => {
    setError(false);
  }

  return (
    <div>
      {error === true && <ErrorModal title={title} message={errorDescription} onClick={errorClickHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={enteredUsername}onChange={usernameChangeHandler}/>
          <label htmlFor='age'>Age (Years)</label>
          <input id="age" type='number' onChange={ageChangeHandler} value={enteredAge}></input>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
};

export default AddUser;
