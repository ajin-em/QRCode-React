import React, { useContext } from 'react'
import { InputContext } from '../App'

function InputField() {
    const {InputValue, setInputValue} = useContext(InputContext);
    const handleOnChange = e => setInputValue({
        ...InputValue, url: e.target.value
    });
  return (
    <div>

        <label className='font-semibold text-md'>
            Your URL
        </label>

        <input type="url" className='w-full border-2 py-1 px-3 text-gray-700 rouded-sm' 
        placeholder='https://www.example.com' value={InputValue.url} onChange={handleOnChange}/>
    </div>
  )
}

export default InputField