import { observer } from "mobx-react";
import { useHandleMouseMove, useHandleMouseUp, useHandleMouseDown, useAppState, useHandleKeyDown } from "./hooks";

export const Handler = observer(() => {
  const appState = useAppState();

  useHandleMouseDown(appState);
  useHandleMouseUp(appState);
  useHandleMouseMove(appState);
  useHandleKeyDown(appState);

  return <></>;
})
