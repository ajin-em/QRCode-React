import { useState, createContext } from 'react'
import InputForm from './components/InputForm'
import QRCode from './components/QRCode'
import axios from 'axios';


// Create context
export const InputContext = createContext();

function App() {
  const [InputValue, setInputValue] = useState({
    url: '',
    color: ''
  });
  const [Response, setResponse] = useState('');
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  const config = {
    headers: { Authorization: 'Bearer 7d5095c0-31f0-11ef-a644-8d600c1c6af1' }
  }
  const bodyParameters = {
    "colorDark": InputValue.color,
    "qrCategory": "url",
    "text": InputValue.url
  }
  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        'https://qrtiger.com/api/qr/static',
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const value = {
    InputValue,
    setInputValue,
    getQrCode,
    Response,
    Loading,
    Error
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-24 md:pt-80 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QRCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;