import React, { useContext, useEffect, useState } from 'react'
import { ChromePicker } from 'react-color';
import { InputContext } from '../App';

const InputColor = () => {
        const [color, setColor] = useState('#054080');

        const [displayColorPicker, setDisplayColorPicker] = useState(false);

        const {InputValue, setInputValue} = useContext(InputContext);
        useEffect(() =>{
            setInputValue({ ...InputValue, color: color})
        }, [color]);

        const handleChange = color => setColor(color.hex);
    
  return (
    <div className='relative'>
        <label className='font-semibold text-md'>
            Color
        </label>
        <div className='flex items-center gap-2'>

            <div 
                onClick={() => setDisplayColorPicker(!displayColorPicker)}
                style={{background:color}} 
                className='w-10 h-8 cursor-pointer border-4'>
                <span className='m-10 bg-emerald-100 font-semibold rounded'>{color}</span>
            </div>
            {
                displayColorPicker && (
                    <div className='absolute  top-16 left-0 z-10'>
                        <ChromePicker color={color} onChange={handleChange}/>
                    </div>
                )
            }

        </div>
    </div>
  )
}

export default InputColor