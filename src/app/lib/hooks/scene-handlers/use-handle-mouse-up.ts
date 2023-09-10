import { CreateRectangleEvent, EventBus, MouseEventName, MouseUpEvent } from "../../../../shared";
import { useCallback, useEffect } from "react";
import { Tool } from "../../../../widgets/toolbar";

export const useHandleMouseUp = (state: AppState) => {
  const handleMouseUp = useCallback(({ x, y }: MouseUpEvent) => {
    if (state.tool.activeTool === Tool.Selection) return;

    EventBus.fire(new CreateRectangleEvent({ x, y, state }))
  }, [state]);

  useEffect(() => {
    const off = EventBus.on(MouseEventName.MouseUp, handleMouseUp);

    return () => {
      off();
    }
  }, [handleMouseUp]);
}
