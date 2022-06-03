import React from 'react';
import './Form.css';


const Form = props => {
  return ( 
  <div className='form--weather'>
    <form onSubmit={props.submit}>
      <input 
        type="text" 
        value={props.value}
        placeholder="Wpisz miasto"
        onChange={props.change}
      />
      <button>Wyszukaj</button>
    </form>
  </div>
  );
}
 
export default Form;