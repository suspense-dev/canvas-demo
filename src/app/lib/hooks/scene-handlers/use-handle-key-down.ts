import { EventBus, KeyboardEventName, KeyDownEvent, RemoveElementEvent, UnselectElementEvent } from "../../../../shared";
import { useCallback, useEffect } from "react";

export const useHandleKeyDown = (state: AppState): void => {
  const handleKeyDown = useCallback(({ key }: KeyDownEvent) => {
    if (key === 'Backspace') {
      state.selection.selectionElements.forEach(selection => {
        const element = selection.targetElement;
        // @ts-ignore
        EventBus.fire(new UnselectElementEvent({ element, state }));
        // @ts-ignore
        EventBus.fire(new RemoveElementEvent({ element, state }))
      })
    }
  }, [state]);

  useEffect(() => {
    const off = EventBus.on(KeyboardEventName.KeyDown, handleKeyDown);

    return () => {
      off();
    }
  }, [handleKeyDown]);
}
