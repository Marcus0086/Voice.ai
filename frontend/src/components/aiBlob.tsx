'use client'

import { useState } from 'react'

import '@/styles/aiBlob.scss'
import useChatWithAI from '@/hooks/useChatWithAI'
import clsx from '@/utils/clsx'

const AIBlob = () => {
    const {
        isRecording, isProcessing, startRecording, stopRecording
    } = useChatWithAI()

    return <div className="flex items-center justify-center">
        <button
            className={clsx(
                "container",
                isRecording ? 'palette-1' : isProcessing ? 'palette-2' : 'palette-3'
            )}
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isProcessing}
        >
            <div className="blobs">
                <svg viewBox="0 0 1200 1200">
                    <g className="blob blob-1">
                        <path />
                    </g>
                    <g className="blob blob-2">
                        <path />
                    </g>
                    <g className="blob blob-3">
                        <path />
                    </g>
                    <g className="blob blob-4">
                        <path />
                    </g>
                    <g className="blob blob-1 alt">
                        <path />
                    </g>
                    <g className="blob blob-2 alt">
                        <path />
                    </g>
                    <g className="blob blob-3 alt">
                        <path />
                    </g>
                    <g className="blob blob-4 alt">
                        <path />
                    </g>
                </svg>
            </div>
        </button>
    </div>
}

export default AIBlob