import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState( { firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"", postalcode:"", 
  comments:false,  candidates:false,  offers:false,
   mode:""})

  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name] : type === "checkbox" ? checked: value
      }
    });

  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing entire form's data")
    console.log(formData)
  }
  return(
<div>
<form onSubmit={submitHandler} className='flex flex-col max-w-[1080px] mx-auto bg-slate-200'>
  <fieldset className='flex flex-col mx-10 mt-10'>
  <label htmlFor='firstName' className='font-semibold'> First Name</label>
   <input 
  type='text'
  placeholder='John'
  name='firstName'
  onChange={changeHandler}
  value={formData.firstName}
  id='firstName'
  className='textfield'
  />
  <label htmlFor='lastName' className='font-semibold'> Last Name</label>
  <input 
  type='text'
  placeholder='Doe'
  name='lastName'
  onChange={changeHandler}
  value={formData.lastName}
  id='lastName'
  className='textfield'
  />
   <label htmlFor='email' className='font-semibold'> Email Address</label>
  <input 
  type='email'
  placeholder='email@mail.com'
  name='email'
  id='email'
  onChange={changeHandler}
  value={formData.email}
  className='textfield'
  />
  
  <label htmlFor='country' className='font-semibold'>Country</label>
  <select name='country' id='country' value={formData.country} onChange={changeHandler}   className='bg-slate-50 w-full rounded-md p-2' >
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

  <label htmlFor='streetAddress' className='font-semibold'> Street Address</label>
  <input 
  type='text'
  placeholder='1234 Main Street'
  name='streetAddress'
  id='streetAddress'
  onChange={changeHandler}
  value={formData.streetAddress}
  className='textfield'
  />
  <label htmlFor='city' className='font-semibold'> City</label>
  <input 
  type='text'
  placeholder='City'
  name='city'
  id='city'
  onChange={changeHandler}
  value={formData.city}
  className='textfield'
  />
  <label htmlFor='state' className='font-semibold'> State/Province</label>
  <input 
  type='text'
  placeholder='West Bengal'
  name='state'
  id='state'
  onChange={changeHandler}
  value={formData.state}
  className='textfield'
  />
    <label htmlFor='postalcode' className='font-semibold'> Postal Code</label>
  <input 
  type='text'
  placeholder='253641'
  name='postalcode'
  id='postalcode'
  onChange={changeHandler}
  value={formData.postalcode}
  className='textfield'
  />
</fieldset>
  <fieldset className='flex flex-col m-10 gap-3'>
    <legend className='font-bold leading-10'>By Email </legend>

    <div className='flex'>
    <input 
    type='checkbox'
    onChange={changeHandler}
    name="comments"
    id='comments' 
    checked={formData.comments}
    />
    <label htmlFor='comments'className='flex flex-col font-semibold leading-5'>Comments <span className='text-gray-800  font-light text-[12px]'>Get notified when someone posts a comment on a posting</span></label>
    </div>

    <div className='flex'>
    <input 
    type='checkbox'
    onChange={changeHandler}
    name="candidates"
    id='candidates' 
    checked={formData.candidates}
    />
    <label htmlFor='candidates' className='flex flex-col font-semibold leading-5'>Candidates <span className='text-gray-800 font-light text-[12px]'>Get notified when a candidate applies for job</span></label>
    </div>

   <div className='flex'>
   <input 
    type='checkbox'
    onChange={changeHandler}
    name="offers"
    id='offers' 
    checked={formData.offers}
    />
    <label htmlFor='offers' className='flex flex-col font-semibold leading-5'>Offers <span className='text-gray-800 font-light text-[12px]'>Get notified when a candidate accepts or rejects an offer</span></label>
   </div>

  </fieldset>

  <fieldset className='flex flex-col mx-10 leading-10 font-semibold'>
    <legend  className='font-bold flex flex-col leading-5'>
      Push Notifications
      <span className='text-gray-800  font-light text-[12px]'>These are delivered vis SMS to your mobile phone</span>
    </legend>
    <div className='flex'>
    <input
    type='radio'
    onChange={changeHandler}
    name='mode'
    value='everything'
    id='everything'
    checked={formData.mode==='everything'}
    />
    <label htmlFor='everything'>Everything</label>
    </div>

    <div className='flex'>
    <input
    type='radio'
    onChange={changeHandler}
    name='mode'
    value='sameasmail'
    id='sameasmail'
    checked={formData.mode==='sameasmail'}
    />
    <label htmlFor='sameasmail'>Same as email</label>
    </div>

    <div className='flex'>
    <input
    type='radio'
    onChange={changeHandler}
    name='mode'
    value='Nonotifications'
    id='Nonotifications'
    checked={formData.mode==='Nonotifications'}
    />
    <label htmlFor='Nonotifications'>No push Notifications</label>

    </div>  
  </fieldset>

  <button className='flex m-10 font-semibold bg-cyan-400 px-4 py-2 rounded-md justify-center w-fit '>Submit</button>
</form>
</div>
  )
}

export default App;
