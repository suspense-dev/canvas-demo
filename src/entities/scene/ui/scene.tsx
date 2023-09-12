import { KeyboardEventHandler, MouseEventHandler, useCallback, useEffect, useRef } from "react";
import { EventBus, MouseDownEvent, MouseMoveEvent, MouseUpEvent } from "../../../shared";
import { observer } from "mobx-react";
import { useRenderElements } from "../lib";
import { SelectionElement } from "../../../features/selection/lib";
import { SceneModel } from "../model";
import { KeyDownEvent } from "../../../shared/lib/event/keyboard.event";

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

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    EventBus.fire(new KeyDownEvent({
      shift: event.shiftKey,
      alt: event.altKey,
      ctrl: event.ctrlKey,
      key: event.key
    }))
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

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
