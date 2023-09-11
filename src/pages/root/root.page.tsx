import { observer } from "mobx-react";
import { Scene } from "../../entities/scene";
import { Toolbar } from "../../widgets/toolbar";
import { SelectionModel } from "../../features/selection";

export const RootPage = observer(() => {
  return (
    <div>
      <Scene selectionElements={SelectionModel.selectionElements}/>
      <Toolbar/>
    </div>
  )
})
