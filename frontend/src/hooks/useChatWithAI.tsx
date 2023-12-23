import { useState, useMemo } from "react"
import MicRecorder from 'mic-recorder-to-mp3'

const useChatWithAI = () => {
    const recorder = useMemo(() => new MicRecorder({
        bitRate: 128
    }), [])

    const [isRecording, setIsRecording] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)

    const chatService = async (blob: Blob) => {
        setIsProcessing(true)
        const res = await fetch('http://localhost:8000/ai/answer', {
            method: 'POST',
            body: blob,
            headers: {
                'Content-Type': 'audio/mpeg'
            }
        })
        setIsProcessing(false)
        const data = await res.blob()
        return data
    }

    const startRecording = async () => {
        await recorder.start()
        setIsRecording(true)
    }

    const getAudio = async (blob: Blob) => {
        const audio_url = URL.createObjectURL(blob)
        const audio = new Audio(audio_url)
        return audio
    }

    const stopRecording = async () => {
        const [_, blob] = await recorder.stop().getMp3()
        setIsRecording(false)
        const ai_response = await chatService(blob)
        const audio = await getAudio(ai_response)
        audio.play()
    }

    return {
        isRecording,
        isProcessing,
        startRecording,
        stopRecording
    }
}

export default useChatWithAI
