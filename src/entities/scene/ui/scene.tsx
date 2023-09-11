import { MouseEventHandler, useRef } from "react";
import { EventBus, MouseDownEvent, MouseMoveEvent, MouseUpEvent } from "../../../shared";
import { observer } from "mobx-react";
import { useRenderElements } from "../lib";
import { SelectionElement } from "../../../features/selection/lib";
import { SceneModel } from "../model";

type Props = {
  selectionElements: SelectionElement[];
}

export const Scene = observer(({ selectionElements }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useRenderElements(canvasRef, [...SceneModel.elements, ...selectionElements]);

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
