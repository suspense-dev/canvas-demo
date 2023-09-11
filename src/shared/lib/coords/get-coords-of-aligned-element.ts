export const getCoordsOfAlignedElement = (element: SceneElement, elementBy: SceneElement): Coords => {
  const x = elementBy.x + (elementBy.width - element.width) / 2;
  const y = elementBy.y + (elementBy.height - element.height) / 2;

  return { x, y };
}
