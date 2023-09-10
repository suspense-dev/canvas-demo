import { action, makeObservable, observable } from "mobx";
import {
  DrawElementEvent,
  SceneEventName,
  EventBus,
  RedrawElementEvent,
  RemoveElementEvent,
  BaseModel
} from "../../../shared";

class _SceneModel extends BaseModel {
  elements: SceneElement[] = [];
  selectedElements: SceneElement[] = [];

  constructor() {
    super('SceneModel');
    makeObservable(this, {
      elements: observable,
      selectedElements: observable,
      addElement: action,
      replaceElement: action,
      removeElement: action,
    })

    EventBus.on(SceneEventName.DrawElement, this.addElement);
    EventBus.on(SceneEventName.RedrawElement, this.replaceElement);
    EventBus.on(SceneEventName.RemoveElement, this.removeElement);
  }

  addElement = (event: DrawElementEvent): void => {
    this.elements.push(event.element);
  }

  replaceElement = ({ prevElement, currentElement }: RedrawElementEvent): void => {
    const indexOf = this.elements.findIndex(el => el.id === prevElement.id);

    if (indexOf < 0) return;

    this.elements.splice(indexOf, 1, currentElement);
  }

  removeElement = ({ element }: RemoveElementEvent): void => {
    const indexOf = this.elements.findIndex(el => el.id === element.id);

    if (indexOf < 0) return;

    this.elements.splice(indexOf, 1);
  }
}

export const SceneModel = new _SceneModel();
