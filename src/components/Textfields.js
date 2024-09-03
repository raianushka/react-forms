import React from 'react';

function Textfield(){
    function changeHandler(event){
        const {name, value, checked, type} = event.target
        setFormData(prevFormData=>{
          return{
            ...prevFormData,
            [name] : type === "checkbox" ? checked: value
          }
        });
    
      }
    return(
       <fieldset>
          <label htmlFor='firstName'> First Name</label>
   <input 
  type='text'
  placeholder='John'
  name='firstName'
  onChange={changeHandler}
  value={formData.firstName}
  id='firstName'
  />
  <label htmlFor='lastName'> Last Name</label>
  <input 
  type='text'
  placeholder='Doe'
  name='lastName'
  onChange={changeHandler}
  value={formData.lastName}
  id='lastName'
  />
   <label htmlFor='email'> Email Address</label>
  <input 
  type='email'
  placeholder='email@mail.com'
  name='email'
  id='email'
  onChange={changeHandler}
  value={formData.email}
  />
  
  <label htmlFor='country'>Country</label>
  <select name='country' id='country' value={formData.country} onChange={changeHandler}>
    <option value="India">India</option>
    <option value="America">America</option>
    <option value="Peru">Peru</option>
    <option value="England">England</option>
    <option value="Netherland">Netherland</option>
    <option value="New Zealand">New Zealand</option>
    <option value="China">China</option>
    <option value="Africa">Africa</option>
    <option value="Sri Lanka">Sri Lanka</option>
  </select>

  <label htmlFor='streetAddress'> Street Address</label>
  <input 
  type='text'
  placeholder='1234 Main Street'
  name='streetAddress'
  id='streetAddress'
  onChange={changeHandler}
  value={formData.streetAddress}
  />
  <label htmlFor='city'> City</label>
  <input 
  type='text'
  placeholder='City'
  name='city'
  id='city'
  onChange={changeHandler}
  value={formData.city}
  />
  <label htmlFor='state'> State/Province</label>
  <input 
  type='text'
  placeholder='West Bengal'
  name='state'
  id='state'
  onChange={changeHandler}
  value={formData.state}
  />
    <label htmlFor='postalcode'> Postal Code</label>
  <input 
  type='text'
  placeholder='253641'
  name='postalcode'
  id='postalcode'
  onChange={changeHandler}
  value={formData.postalcode}
  />
       </fieldset>
    )

}
export default Textfield;