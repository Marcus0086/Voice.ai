declare module 'mic-recorder-to-mp3' {
    type BitRate = 128 | 192 | 256 | 320;

    interface MicRecorderOptions {
        bitRate: BitRate;
    }

    class MicRecorder {
        constructor(options: MicRecorderOptions);

        start(): Promise<void>;
        stop(): MicRecorder;
        getMp3(): Promise<[Buffer, Blob]>;
    }

    export default MicRecorder;
}