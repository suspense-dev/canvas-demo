import { MouseDownEvent, MouseMoveEvent, MouseUpEvent } from "./mouse.event";
import { CreateRectangleEvent } from "./create-element.event";
import { BaseAppEvent } from "./base-event";
import { RedrawElementEvent, RemoveElementEvent, DrawElementEvent } from "./scene.event";
import { CreateElementEventName, MouseEventName, SceneEventName, SelectionEventName } from "./event.constants";

type MouseEvent = MouseDownEvent | MouseUpEvent | MouseMoveEvent;
type CreateElementEvent = CreateRectangleEvent;
type SceneEvent = DrawElementEvent | RedrawElementEvent | RemoveElementEvent;

export type EventName = MouseEventName | CreateElementEventName | SceneEventName | SelectionEventName;
export type Event = BaseAppEvent | MouseEvent | CreateElementEvent | SceneEvent;
