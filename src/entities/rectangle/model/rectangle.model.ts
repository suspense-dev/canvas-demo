import { action, makeObservable, observable } from "mobx";
import { RectangleElement } from "../lib/rectangle.element";
import {
  BaseModel,
  CreateElementEventName,
  CreateRectangleEvent,
  DrawElementEvent,
  EventBus
} from "../../../shared";

class _RectangleModel extends BaseModel {
  all: RectangleElement[] = [];

  constructor() {
    super('RectangleModel');

    makeObservable(this, {
      all: observable,
      create: action,
    })

    EventBus.on(CreateElementEventName.CreateElementRectangle, this.create)
  }

  create = ({ x, y }: CreateRectangleEvent) => {
    const rect = new RectangleElement({
      x, y
    });

    this.all.push(rect);
    EventBus.fire(new DrawElementEvent({ element: rect, state: this.appState }));
  }
}

export const RectangleModel = new _RectangleModel();
