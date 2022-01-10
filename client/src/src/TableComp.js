import '../App.css';

function TableComp(props) {

  return (
    <tbody>
      <tr>
        <th className="formText"><label htmlFor={props.id} >{props.firstName}</label></th>
        <th className="formText">{props.lastName}</th>
        <th className="formText">{props.superpower}</th>
        <th className="formText">{props.dateBirth}</th>
        <th className="delete" onClick={() => props.deleteAstronaut(props.id)} >delete</th>
      </tr>
    </tbody>
  );
}

export default TableComp;