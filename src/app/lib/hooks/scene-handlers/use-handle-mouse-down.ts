import { EventBus, getElementByCoords, MouseDownEvent, MouseEventName } from "../../../../shared";
import { useCallback, useEffect } from "react";
import { ClearSelectionsEvent, SelectElementEvent } from "../../../../shared/lib/event/selection.event";
import { Tool } from "../../../../widgets/toolbar";

export const useHandleMouseDown = (state: AppState) => {
  const handleMouseDown = useCallback(({ x, y }: MouseDownEvent) => {
    // @ts-ignore
    const element = getElementByCoords({ x, y }, state.scene.elements);
    // @ts-ignore
    const selection = element === null ? getElementByCoords({ x, y }, state.selection.selectionElements) : null;

    if (!element && !selection) {
      EventBus.fire(new ClearSelectionsEvent({ state }));
      return;
    }

    if (element && state.tool.activeTool === Tool.Selection) {
      EventBus.fire(new SelectElementEvent({
        element,
        state
      }));
    }
  }, [state]);

  useEffect(() => {
    const off = EventBus.on(MouseEventName.MouseDown, handleMouseDown);

    return () => {
      off();
    }
  }, [handleMouseDown]);
}
