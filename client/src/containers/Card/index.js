import React from 'react';
import "./style.css";

function Card(props) {
  console.log(props.key)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Vocab</strong> {props.Vocab}
          </li>
          <li>
            <strong>Definition</strong> {props.Definition}
          </li>
        </ul>
      </div>
      <span onClick={ () => props.handleDelete(props.id) }  className="remove">𝘅</span>
    </div>
  );
}

export default CardForm;