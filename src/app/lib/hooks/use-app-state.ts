import { SceneModel } from "../../../entities/scene";
import { ToolbarModel } from "../../../widgets/toolbar";

export const useAppState = (): AppState => ({
  scene: {
    elements: [...SceneModel.elements],
    selectedElements: [...SceneModel.selectedElements],
  },
  tool: {
    activeTool: ToolbarModel.activeTool,
  }
})
