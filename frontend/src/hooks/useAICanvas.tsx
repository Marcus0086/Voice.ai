import { useEffect, useCallback } from "react"

type AIBlob = {
    x: number,
    y: number,
    size: number,
    dx: number,
    dy: number

}
const useAICanvas = () => {
    const getAiBlob = (canvas: HTMLCanvasElement) => {
        const aiBlob: AIBlob = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            size: 50,
            dx: 2, // Change in x - speed and direction
            dy: 2  // Change in y - speed and direction
        }
        return aiBlob
    }

    const drawBlob = (ctx: CanvasRenderingContext2D, blob: AIBlob) => {
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#0000FF'; // Blob color
        ctx.fill();
        ctx.closePath();
    }

    const updateBlob = useCallback((
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        blob: AIBlob
    ) => {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the blob
        drawBlob(
            ctx,
            blob
        );

        // Move the blob
        blob.x += blob.dx;
        blob.y += blob.dy;

        // Check for canvas boundaries and reverse direction
        if (blob.x + blob.size > canvas.width || blob.x - blob.size < 0) {
            blob.dx *= -1;
        }
        if (blob.y + blob.size > canvas.height || blob.y - blob.size < 0) {
            blob.dy *= -1;
        }

        // Repeat
        requestAnimationFrame(() => updateBlob(canvas, ctx, blob));
    }, [])

    useEffect(() => {
        const canvas = document.getElementById('aiCanvas') as HTMLCanvasElement
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        updateBlob(canvas, ctx, getAiBlob(canvas))
    }, [updateBlob])
}

export default useAICanvas