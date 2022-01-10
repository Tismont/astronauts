import React, { useState, useEffect } from 'react';
import './App.css';
import TableComp from './src/TableComp';
import SubmitForm from './src/SubmitForm';
import Axios from 'axios';

function App(props) {

  const [astronautState, setAstronautState] = useState([])

  useEffect(() => {
  Axios.get("http://localhost:3001/read").then((response) => {
    setAstronautState(response.data)
    })
  }, []);

  function addAstronaut(id, firstName, lastName, superpower, dateBirth) {
    const newAstronaut = { id: id, firstName: firstName, lastName: lastName, superpower: superpower, dateBirth: dateBirth };
    Axios.post("http://localhost:3001/insert", {
      id: id,
      firstName: firstName,
      lastName: lastName,
      superpower: superpower,
      dateBirth: dateBirth,
      key: id,
    });
    setAstronautState([...astronautState, newAstronaut]);
  }

  const astronautList = astronautState.map(el => ( 
    <TableComp id={el.id} firstName={el.firstName} lastName={el.lastName} superpower={el.superpower} dateBirth={el.dateBirth} key={el.id} deleteAstronaut={deleteAstronaut} /> 
    ));

  function deleteAstronaut(id) {
    Axios.delete(`http://localhost:3001/delete/${id}`);
    const remainingAstronauts = astronautState.filter(el => id !== el.id);
    setAstronautState(remainingAstronauts);
    }

  return (
    <div className="App">
      <h2 className="heading">
        Astronauts
      </h2>
      <SubmitForm addAstronaut={addAstronaut} />
      <table>
        <tbody>
          <tr>
            <th className="tableHead">Firstname</th>
            <th className="tableHead">Lastname</th>
            <th className="tableHead">Superpower</th>
            <th className="tableHead">Date of Birth</th>
          </tr>
        </tbody>
        {astronautList}
      </table>
    </div>
  );
}

export default App;