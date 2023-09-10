import { EventBus, MouseEventName, MouseMoveEvent } from "../../../../shared";
import { useEffect } from "react";

export const useHandleMouseMove = (state: AppState) => {
  const handleMouseMove = (event: MouseMoveEvent) => {
  }

  useEffect(() => {
    const off = EventBus.on(MouseEventName.MouseMove, handleMouseMove);

    return () => {
      off();
    }
  }, []);
}
