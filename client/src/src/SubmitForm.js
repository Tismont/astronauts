import React, { useState } from 'react';
import '../App.css';
import { nanoid } from 'nanoid';

function SubmitForm(props) {

  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  const [id, setId] = useState(genRanHex(24));
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [dateBirth, setDateBirth] = useState('');



  function submitForm(e) {
    e.preventDefault();
    props.addAstronaut(id, firstName, lastName, superpower, dateBirth);
    setId(genRanHex(24))
    setFirstName('');
    setLastName('');
    setDateBirth('');
    setSuperpower('');
  } 

  return (
    <form onSubmit={submitForm} >
      <div>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname" required />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Lastname" required />
        <input type="text" value={superpower} onChange={(e) => setSuperpower(e.target.value)} placeholder="Superpower" required />
        <input type="date" value={dateBirth} onChange={(e) => setDateBirth(e.target.value)} placeholder="Date of birth" required />
      </div>
      <button className="submitButton" type="submit" >Submit</button>
    </form>
  );
}

export default SubmitForm;
