import { SelectionEventName } from "./event.constants";
import { BaseAppEvent } from "./base-event";

type SelectElementEventProps = {
  element: SceneElement,
  state: AppState,
}

type UnselectElementEventProps = {
  element: SceneElement,
  state: AppState,
}

type ClearSelectionsEventProps = {
  state: AppState,
}

export class SelectElementEvent extends BaseAppEvent {
  element: SceneElement;

  constructor({ element, ...props }: SelectElementEventProps) {
    super(SelectionEventName.SelectElement, props);
    this.element = element;
  }
}

export class UnselectElementEvent extends BaseAppEvent {
  element: SceneElement;

  constructor({ element, ...props }: UnselectElementEventProps) {
    super(SelectionEventName.UnselectElement, props);
    this.element = element;
  }
}

export class ClearSelectionsEvent extends BaseAppEvent {
  constructor(props: ClearSelectionsEventProps) {
    super(SelectionEventName.ClearSelections, props);
  }
}
