import React from 'react';

const AddUser = props => {
  const AddUserHandler = (event) => {
    event.preventDefault();

  };


  return (
    <form onSubmit={AddUserHandler}>
      <label Htmlfor='username'>Username</label>
      <input id='username' type='text'/>
      <label Htmlfor='age'>Age (Years)</label>
      <input id="age" type='number'></input>
      <button type='submit'>Add User</button>
    </form>
  )
};

export default AddUser;
