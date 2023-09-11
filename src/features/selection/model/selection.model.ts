import { action, makeObservable, observable } from "mobx";
import {
  BaseModel,
  DrawElementEvent,
  EventBus,
  RemoveElementEvent,
  SceneEventName,
  SelectionEventName
} from "../../../shared";
import { SelectionElement } from "../lib";

class _SelectionModel extends BaseModel {
  selectionElements: SelectionElement[] = [];

  constructor() {
    super('SelectionModel');

    makeObservable(this, {
      selectionElements: observable,
      addSelection: action,
      removeSelection: action,
      clearSelections: action,
    })

    EventBus.on(SceneEventName.RemoveElement, this.unselectElement);
    EventBus.on(SelectionEventName.SelectElement, this.selectElement);
    EventBus.on(SelectionEventName.UnselectElement, this.unselectElement);
    EventBus.on(SelectionEventName.ClearSelections, this.clearSelections);
  }

  selectElement = (event: DrawElementEvent): void => {
    this.addSelection(event.element);
  }

  unselectElement = (event: RemoveElementEvent): void => {
    this.removeSelection(event.element);
  }

  addSelection = (element: SceneElement, multiSelect = false) => {
    if (this.selectionElements.findIndex(el => el.targetElement === element) >= 0) return;

    const selectionElement = new SelectionElement(element, {
      x: 0,
      y: 0,
    });

    if (multiSelect) {
      this.selectionElements.push(selectionElement);
    } else {
      this.selectionElements = [selectionElement];
    }
  }

  removeSelection = (element: SceneElement): void => {
    const indexOf = this.selectionElements.findIndex(el => el.targetElement === element);

    if (indexOf < 0) return;

    this.selectionElements.splice(indexOf, 1);
  }

  clearSelections = (): void => {
    this.selectionElements = [];
  }
}

export const SelectionModel = new _SelectionModel();
