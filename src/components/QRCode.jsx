import React, { useContext } from 'react'
import { InputContext } from '../App';
import { saveAs } from 'file-saver';

const QRCode = () => {

    const {Response, Loading, Error} = useContext(InputContext)

    const downloadImage = () => {
        saveAs(Response, 'qrCode.png');
    }

    if(Loading){
        return (

            <div className='animate-pulse flex flex-col items-center justify-center px-10 gap-3'>

                <div className='h-32 w-full bg-gray-300'></div>
                <div className='h-8 w-full bg-gray-300'></div>

            </div>
        )
    }

    if (Error){
        return (
            <div className='text-gray-500 flex items-center'> sorry, something went wrong</div>
        )
    }
  return (
    <div className='bg-gray-100 rounded-r-md flex flex-col items-center justify-center'>
        
        {
            Response ? <div>

            <img className='w-48' src={Response} alt="qrcode" />

            <button
            onClick={downloadImage} 
            className='bg-blue-400 text-white mt-2 py-1 w-full'>
                Download
            </button>

        </div> : (

            <div className='text-gray-500'>Your QR Code will show here...</div>

            )
        }

    </div>
  )
}

export default QRCode