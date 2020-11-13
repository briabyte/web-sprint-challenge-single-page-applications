import React from 'react';

export default function PizzaForm (props) {
    const { values, 
        submit, 
        update, 
        disabled, 
        errors, 
        inputChange 
        } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type, } = evt.target;
        type === "checkbox" ? update(name, checked) : update(name, value);
        type === "checkbox" ? inputChange(name, checked) : inputChange(name, value)
    };

    return (
        <form className='form-container' onSubmit={onSubmit}>
         <div className='form-group submit'>
           <h2>Freshness as quick as a reload</h2>
           <h3>Let&apos;s make a pizza!</h3>
           
           <div className="errors">
             <div>{errors.name}</div>
             <div>{errors.phone}</div>
           </div>
           
           <div className="form-group inputs">
             <label>
                Name&nbsp;
                    <input
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                    />
             </label>
             <label>
                Phone Number
                    <input
                        value={values.phone}
                        onChange={onChange}
                        name="phone"
                        type="number"
                    />
             </label>
             <label>
                Toppings
                    <select onChange={onChange} value={values.size} name="size">
                        <option value="">- Select an option -</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xl">Xtra Large</option>
                    </select>
             </label>
             <label>
                Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
             </label>
             <label>
                Green Pepper
                    <input
                        type="checkbox"
                        name="greenpepper"
                        checked={values.greenpepper}
                        onChange={onChange}
                    />
             </label>
             <label>
                Pineapple
                    <input
                        type="checkbox"
                        name="pineapple"
                        checked={values.pineapple}
                        onChange={onChange}
                    />
             </label>
             <label>
                Mushroom
                    <input
                        type="checkbox"
                        name="mushroom"
                        checked={values.mushroom}
                        onChange={onChange}
                    />
             </label>
             <button disabled={disabled}>Place Order</button>
           </div>
         </div>
        </form>
    );
}