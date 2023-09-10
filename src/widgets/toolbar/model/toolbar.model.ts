import { action, makeObservable, observable } from "mobx";
import { BaseModel } from "../../../shared";

export enum Tool {
  Selection = 'Selection',
  Rect = 'Rect',
}

class _ToolbarModel extends BaseModel {
  activeTool = Tool.Selection;

  constructor() {
    super('ToolbarModel');
    makeObservable(this, {
      activeTool: observable,
      setActiveTool: action,
    })
  }

  setActiveTool(tool: Tool) {
    this.activeTool = tool;
  }
}

export const ToolbarModel = new _ToolbarModel();

