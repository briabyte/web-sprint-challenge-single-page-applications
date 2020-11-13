import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import schema from './Schema';
// import axios from 'axios';
import * as yup from 'yup';
import Home from './Home';
import Pizza from './Pizza';

const initialFormValues = {
  //text inputs
  name: '',
  phone: '',
  //dropdown
  size: '',
  //checkboxes
  pepperoni: false,
  greenpepper: false,
  pineapple: false,
  mushroom: false,
};

const initialFormErrors = {
  name: '',
  phone: '',
};

const pizzaInitialValue = [];

const initialDisabled = true;

function App() {
  
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pizza, setPizza] = useState(pizzaInitialValue);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const pizzaOnChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const pizzaSubmit = () => {
    setPizza([ ...pizza, formValues]);
    setFormValues(initialFormValues);
  };

  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  
  return (
    <div className="App">
      <nav>
        <h1 className='header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza</Link>
        </div>
      </nav>
      <Switch>
       <Route path='/pizza'>
         <Pizza
          values={formValues}
          update={pizzaOnChange}
          submit={pizzaSubmit}
          errors={formErrors}
          inputChange={inputChange}
          disabled={disabled}
         />
       </Route>

        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
