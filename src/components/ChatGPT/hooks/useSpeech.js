// import { Container } from './styles';
export const useSpeech =  () => {

    const speak = ({ message, pitch = 1}) => { 
        const speech = window.speechSynthesis;
        let voices = speech.getVoices();
        const utterThis = new SpeechSynthesisUtterance(message);
        utterThis.voice = voices[0];
        utterThis.pitch = pitch;
        speech.speak(utterThis); 
    }

    const stopVoice = () => {
        const speech = window.speechSynthesis;
        speech.cancel()
    }

    return {
        speak,
        stopVoice
    };
} 