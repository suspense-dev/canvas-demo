export const getElementByCoords = ({ x, y }: Coords, elements: DrawableElement[]): DrawableElement | null => {
  const element = elements.find(element => element.x <= x && element.x + element.width >= x && element.y <= y && element.y + element.height >= y);

  return element || null;
};
