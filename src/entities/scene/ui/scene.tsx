import { MouseEventHandler, useRef } from "react";
import { EventBus, MouseDownEvent, MouseMoveEvent, MouseUpEvent } from "../../../shared";
import { observer } from "mobx-react";
import { useRenderElementsToScene } from "../lib";

export const Scene = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useRenderElementsToScene(canvasRef);

  const handleMouseDown: MouseEventHandler<HTMLCanvasElement> = (event) => {
    EventBus.fire(new MouseDownEvent({
      x: event.clientX,
      y: event.clientY,
    }))
  }

  const handleMouseUp: MouseEventHandler<HTMLCanvasElement> = (event) => {
    EventBus.fire(new MouseUpEvent({
      x: event.clientX,
      y: event.clientY,
    }))
  }

  const handleMouseMove: MouseEventHandler<HTMLCanvasElement> = (event) => {
    EventBus.fire(new MouseMoveEvent({ x: event.clientX, y: event.clientY }))
  }

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={700}
      style={{ border: '1px solid black' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  )
})
