import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
function Speech() {
    const { transcript, resetTranscript } = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null
    }

    return (
        <div>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <p>{transcript}</p>
        </div>
    )
}

export default Speech
