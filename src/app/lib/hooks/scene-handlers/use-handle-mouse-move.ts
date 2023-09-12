import { EventBus, MouseEventName, MouseMoveEvent } from "../../../../shared";
import { useCallback, useEffect } from "react";

export const useHandleMouseMove = (state: AppState) => {
  const handleMouseMove = useCallback((event: MouseMoveEvent) => {
  }, []);

  useEffect(() => {
    const off = EventBus.on(MouseEventName.MouseMove, handleMouseMove);

    return () => {
      off();
    }
  }, []);
}
