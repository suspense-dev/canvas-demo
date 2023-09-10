import { EventBus, MouseEventName, MouseDownEvent } from "../../../../shared";
import { useEffect } from "react";

export const useHandleMouseDown = (state: AppState) => {
  const handleMouseDown = ({ x, y }: MouseDownEvent) => {
  }

  useEffect(() => {
    const off = EventBus.on(MouseEventName.MouseDown, handleMouseDown);

    return () => {
      off();
    }
  }, []);
}
