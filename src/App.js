import { FiberManualRecord, Stop } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';
import ChatGPT from './components/ChatGPT';

function App() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('');
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <main>
      <h1>ChatGPT Voice Recognition</h1>
      <div className="buttons_container">
        <button className='micStart' onClick={SpeechRecognition.startListening} style={{ background: listening ? '#e3bfbc' : '#9db0b8' }}><FiberManualRecord style={{ color: 'red' }}/></button>
        <button className='micStop' onClick={SpeechRecognition.stopListening}><Stop/></button>
        <ChatGPT 
          transcript={transcript} 
          listening={listening}   
          resetTranscript={resetTranscript} 
          setLoading={setLoading} 
          message={message} 
          setMessage={setMessage}
        />
      </div>
      {loading && <CircularProgress/>}
      <span>{message}</span>
    </main>
  );
}

export default App;
