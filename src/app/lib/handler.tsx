import { observer } from "mobx-react";
import { useHandleMouseMove, useHandleMouseUp, useHandleMouseDown, useAppState } from "./hooks";

export const Handler = observer(() => {
  const appState = useAppState();

  useHandleMouseDown(appState);
  useHandleMouseUp(appState);
  useHandleMouseMove(appState);

  return <></>;
})
