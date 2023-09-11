import { SceneModel } from "../../../entities/scene";
import { ToolbarModel } from "../../../widgets/toolbar";
import { toJS } from "mobx";
import { SelectionModel } from "../../../features/selection";

export const useAppState = (): AppState => ({
  scene: {
    elements: toJS(SceneModel.elements),
  },
  selection: {
    selectionElements: toJS(SelectionModel.selectionElements),
  },
  tool: {
    activeTool: toJS(ToolbarModel.activeTool),
  }
})
